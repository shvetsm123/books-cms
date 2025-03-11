import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBooksInput } from './user-create-without-books.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBooksInput } from './user-create-or-connect-without-books.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutBooksInput {

    @Field(() => [UserCreateWithoutBooksInput], {nullable:true})
    @Type(() => UserCreateWithoutBooksInput)
    create?: Array<UserCreateWithoutBooksInput>;

    @Field(() => [UserCreateOrConnectWithoutBooksInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBooksInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutBooksInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
}
