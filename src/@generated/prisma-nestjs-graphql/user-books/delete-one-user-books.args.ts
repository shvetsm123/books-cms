import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserBooksArgs {

    @Field(() => UserBooksWhereUniqueInput, {nullable:false})
    @Type(() => UserBooksWhereUniqueInput)
    where!: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;
}
