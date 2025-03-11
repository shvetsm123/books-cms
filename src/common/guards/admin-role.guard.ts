import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Roles } from '../types/roles';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const token = request.headers['authorization']?.split(' ')[1];
    if (!token) {
      return false;
    }

    const decoded = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET,
    });

    request.user = decoded;

    const userRoles = decoded.roles.map((role: any) => String(role));

    if (!userRoles || !Array.isArray(userRoles)) {
      return false;
    }

    const hasAdminRole = userRoles.includes(Roles.ADMIN);
    const hasUserRole = userRoles.includes(Roles.USER);

    return !!(hasAdminRole && hasUserRole);
  }
}
