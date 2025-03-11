import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBooksInput } from './user-create-without-books.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBooksInput } from './user-create-or-connect-without-books.input';
import { UserUpsertWithWhereUniqueWithoutBooksInput } from './user-upsert-with-where-unique-without-books.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutBooksInput } from './user-update-with-where-unique-without-books.input';
import { UserUpdateManyWithWhereWithoutBooksInput } from './user-update-many-with-where-without-books.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutBooksNestedInput {

    @Field(() => [UserCreateWithoutBooksInput], {nullable:true})
    @Type(() => UserCreateWithoutBooksInput)
    create?: Array<UserCreateWithoutBooksInput>;

    @Field(() => [UserCreateOrConnectWithoutBooksInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBooksInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutBooksInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutBooksInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutBooksInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBooksInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutBooksInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutBooksInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutBooksInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutBooksInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutBooksInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutBooksInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
