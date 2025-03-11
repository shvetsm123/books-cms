import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksUpdateInput } from './user-books-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';

@ArgsType()
export class UpdateOneUserBooksArgs {

    @Field(() => UserBooksUpdateInput, {nullable:false})
    @Type(() => UserBooksUpdateInput)
    data!: UserBooksUpdateInput;

    @Field(() => UserBooksWhereUniqueInput, {nullable:false})
    @Type(() => UserBooksWhereUniqueInput)
    where!: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;
}
