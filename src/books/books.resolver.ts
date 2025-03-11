import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { OrderByParams, SearchBookInput } from '../graphql';
import { BookCreateInput } from '../@generated/prisma-nestjs-graphql/book/book-create.input';
import { BookUpdateInput } from '../@generated/prisma-nestjs-graphql/book/book-update.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRoleGuard } from '../common/guards/user-role.guard';
import { AdminRoleGuard } from '../common/guards/admin-role.guard';

@Resolver('Book')
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation('createBook')
  @UseGuards(JwtAuthGuard, UserRoleGuard)
  create(@Args('createBookInput') createBookInput: BookCreateInput) {
    return this.booksService.create(createBookInput);
  }

  @Query('books')
  @UseGuards(JwtAuthGuard, UserRoleGuard)
  findAll(
    @Args('search') search?: SearchBookInput,
    @Args('orderBy') orderBy?: OrderByParams,
    @Args('skip') skip?: number,
    @Args('take') take?: number,
  ) {
    return this.booksService.findAll(search, orderBy, skip, take);
  }

  @Query('book')
  @UseGuards(JwtAuthGuard, UserRoleGuard)
  findOne(@Args('id') id: number) {
    return this.booksService.findOne(id);
  }

  @Mutation('updateBook')
  @UseGuards(JwtAuthGuard, UserRoleGuard, AdminRoleGuard)
  update(
    @Args('id') id: number,
    @Args('updateBookInput') updateBookInput: BookUpdateInput,
  ) {
    return this.booksService.update(id, updateBookInput);
  }

  @Mutation('removeBook')
  @UseGuards(JwtAuthGuard, UserRoleGuard, AdminRoleGuard)
  remove(@Args('id') id: number) {
    return this.booksService.remove(id);
  }
}
