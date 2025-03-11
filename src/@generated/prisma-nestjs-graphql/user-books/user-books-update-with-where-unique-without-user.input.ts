import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Type } from 'class-transformer';
import { UserBooksUpdateWithoutUserInput } from './user-books-update-without-user.input';

@InputType()
export class UserBooksUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserBooksWhereUniqueInput, {nullable:false})
    @Type(() => UserBooksWhereUniqueInput)
    where!: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;

    @Field(() => UserBooksUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserBooksUpdateWithoutUserInput)
    data!: UserBooksUpdateWithoutUserInput;
}
