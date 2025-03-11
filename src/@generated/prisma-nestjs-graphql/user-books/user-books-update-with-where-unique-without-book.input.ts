import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Type } from 'class-transformer';
import { UserBooksUpdateWithoutBookInput } from './user-books-update-without-book.input';

@InputType()
export class UserBooksUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => UserBooksWhereUniqueInput, {nullable:false})
    @Type(() => UserBooksWhereUniqueInput)
    where!: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;

    @Field(() => UserBooksUpdateWithoutBookInput, {nullable:false})
    @Type(() => UserBooksUpdateWithoutBookInput)
    data!: UserBooksUpdateWithoutBookInput;
}
