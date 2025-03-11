import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Type } from 'class-transformer';
import { UserBooksUpdateWithoutUserInput } from './user-books-update-without-user.input';
import { UserBooksCreateWithoutUserInput } from './user-books-create-without-user.input';

@InputType()
export class UserBooksUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserBooksWhereUniqueInput, {nullable:false})
    @Type(() => UserBooksWhereUniqueInput)
    where!: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;

    @Field(() => UserBooksUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserBooksUpdateWithoutUserInput)
    update!: UserBooksUpdateWithoutUserInput;

    @Field(() => UserBooksCreateWithoutUserInput, {nullable:false})
    @Type(() => UserBooksCreateWithoutUserInput)
    create!: UserBooksCreateWithoutUserInput;
}
