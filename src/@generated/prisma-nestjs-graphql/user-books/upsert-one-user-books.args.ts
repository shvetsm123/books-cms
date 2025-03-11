import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Type } from 'class-transformer';
import { UserBooksCreateInput } from './user-books-create.input';
import { UserBooksUpdateInput } from './user-books-update.input';

@ArgsType()
export class UpsertOneUserBooksArgs {

    @Field(() => UserBooksWhereUniqueInput, {nullable:false})
    @Type(() => UserBooksWhereUniqueInput)
    where!: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;

    @Field(() => UserBooksCreateInput, {nullable:false})
    @Type(() => UserBooksCreateInput)
    create!: UserBooksCreateInput;

    @Field(() => UserBooksUpdateInput, {nullable:false})
    @Type(() => UserBooksUpdateInput)
    update!: UserBooksUpdateInput;
}
