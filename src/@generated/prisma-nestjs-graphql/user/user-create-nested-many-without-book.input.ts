import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookInput } from './user-create-without-book.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBookInput } from './user-create-or-connect-without-book.input';
import { UserCreateManyBookInputEnvelope } from './user-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutBookInput {

    @Field(() => [UserCreateWithoutBookInput], {nullable:true})
    @Type(() => UserCreateWithoutBookInput)
    create?: Array<UserCreateWithoutBookInput>;

    @Field(() => [UserCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutBookInput>;

    @Field(() => UserCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyBookInputEnvelope)
    createMany?: UserCreateManyBookInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
}
