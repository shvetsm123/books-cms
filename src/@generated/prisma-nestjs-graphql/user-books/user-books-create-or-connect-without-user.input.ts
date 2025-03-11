import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Type } from 'class-transformer';
import { UserBooksCreateWithoutUserInput } from './user-books-create-without-user.input';

@InputType()
export class UserBooksCreateOrConnectWithoutUserInput {

    @Field(() => UserBooksWhereUniqueInput, {nullable:false})
    @Type(() => UserBooksWhereUniqueInput)
    where!: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;

    @Field(() => UserBooksCreateWithoutUserInput, {nullable:false})
    @Type(() => UserBooksCreateWithoutUserInput)
    create!: UserBooksCreateWithoutUserInput;
}
