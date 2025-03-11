import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookInput } from './user-create-without-book.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBookInput } from './user-create-or-connect-without-book.input';
import { UserUpsertWithWhereUniqueWithoutBookInput } from './user-upsert-with-where-unique-without-book.input';
import { UserCreateManyBookInputEnvelope } from './user-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutBookInput } from './user-update-with-where-unique-without-book.input';
import { UserUpdateManyWithWhereWithoutBookInput } from './user-update-many-with-where-without-book.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutBookNestedInput {

    @Field(() => [UserCreateWithoutBookInput], {nullable:true})
    @Type(() => UserCreateWithoutBookInput)
    create?: Array<UserCreateWithoutBookInput>;

    @Field(() => [UserCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutBookInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => UserCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyBookInputEnvelope)
    createMany?: UserCreateManyBookInputEnvelope;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
