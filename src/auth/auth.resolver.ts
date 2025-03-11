import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('register')
  register(@Args('authCreateInput') authCreateInput: UserCreateInput) {
    return this.authService.register(authCreateInput);
  }

  @Mutation('login')
  login(@Args('authLoginInput') authLoginInput: UserCreateInput) {
    return this.authService.login(authLoginInput);
  }
}
