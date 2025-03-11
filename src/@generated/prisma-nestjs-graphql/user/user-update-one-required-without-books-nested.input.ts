import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBooksInput } from './user-create-without-books.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBooksInput } from './user-create-or-connect-without-books.input';
import { UserUpsertWithoutBooksInput } from './user-upsert-without-books.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBooksInput } from './user-update-to-one-with-where-without-books.input';

@InputType()
export class UserUpdateOneRequiredWithoutBooksNestedInput {

    @Field(() => UserCreateWithoutBooksInput, {nullable:true})
    @Type(() => UserCreateWithoutBooksInput)
    create?: UserCreateWithoutBooksInput;

    @Field(() => UserCreateOrConnectWithoutBooksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBooksInput)
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput;

    @Field(() => UserUpsertWithoutBooksInput, {nullable:true})
    @Type(() => UserUpsertWithoutBooksInput)
    upsert?: UserUpsertWithoutBooksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBooksInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBooksInput)
    update?: UserUpdateToOneWithWhereWithoutBooksInput;
}
