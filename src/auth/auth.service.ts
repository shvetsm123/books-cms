import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../prisma/prisma.service';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { Roles } from '../common/types/roles';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async register(createUserInput: UserCreateInput) {
    const { email, passwordHash } = createUserInput;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new BadRequestException('User already exists!');
    }

    const hashedPassword = await bcrypt.hash(passwordHash, 10);

    const createdUser = await this.prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        roles: {
          create: {
            role: {
              connect: { name: Roles.USER },
            },
          },
        },
      },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    return {
      id: createdUser.id,
      email: createdUser.email,
      roles: createdUser.roles.map((role) => role.role.name), // Достаем имя роли
    };
  }

  async login(authLoginInput: UserCreateInput) {
    const { email, passwordHash } = authLoginInput;

    const user = await this.validateUser(email, passwordHash);

    const roles = user.roles.map((userRole) => userRole.role.name);

    return {
      id: user.id,
      email: user.email,
      token: this.jwtService.sign({
        id: user.id,
        email: user.email,
        roles,
      }),
      roles,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const comparedPassword = await bcrypt.compare(password, user.passwordHash);

    if (!comparedPassword) {
      throw new UnauthorizedException('Wrong credentials');
    }

    return user;
  }
}
