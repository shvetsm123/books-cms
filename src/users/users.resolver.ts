import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-update.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation('updateUser')
  update(
    @Args('id') id: number,
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
