import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutUsersInput } from './book-create-without-users.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutUsersInput } from './book-create-or-connect-without-users.input';
import { BookUpsertWithoutUsersInput } from './book-upsert-without-users.input';
import { BookWhereInput } from './book-where.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateToOneWithWhereWithoutUsersInput } from './book-update-to-one-with-where-without-users.input';

@InputType()
export class BookUpdateOneWithoutUsersNestedInput {

    @Field(() => BookCreateWithoutUsersInput, {nullable:true})
    @Type(() => BookCreateWithoutUsersInput)
    create?: BookCreateWithoutUsersInput;

    @Field(() => BookCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutUsersInput)
    connectOrCreate?: BookCreateOrConnectWithoutUsersInput;

    @Field(() => BookUpsertWithoutUsersInput, {nullable:true})
    @Type(() => BookUpsertWithoutUsersInput)
    upsert?: BookUpsertWithoutUsersInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: BookWhereInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: BookWhereInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;

    @Field(() => BookUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutUsersInput)
    update?: BookUpdateToOneWithWhereWithoutUsersInput;
}
