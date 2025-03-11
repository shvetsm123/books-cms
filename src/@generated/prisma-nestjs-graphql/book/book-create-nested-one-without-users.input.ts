import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutUsersInput } from './book-create-without-users.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutUsersInput } from './book-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedOneWithoutUsersInput {

    @Field(() => BookCreateWithoutUsersInput, {nullable:true})
    @Type(() => BookCreateWithoutUsersInput)
    create?: BookCreateWithoutUsersInput;

    @Field(() => BookCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutUsersInput)
    connectOrCreate?: BookCreateOrConnectWithoutUsersInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}
