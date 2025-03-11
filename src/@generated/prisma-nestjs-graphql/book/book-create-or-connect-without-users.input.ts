import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutUsersInput } from './book-create-without-users.input';

@InputType()
export class BookCreateOrConnectWithoutUsersInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;

    @Field(() => BookCreateWithoutUsersInput, {nullable:false})
    @Type(() => BookCreateWithoutUsersInput)
    create!: BookCreateWithoutUsersInput;
}
