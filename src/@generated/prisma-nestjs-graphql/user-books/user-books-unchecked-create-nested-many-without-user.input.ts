import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksCreateWithoutUserInput } from './user-books-create-without-user.input';
import { Type } from 'class-transformer';
import { UserBooksCreateOrConnectWithoutUserInput } from './user-books-create-or-connect-without-user.input';
import { UserBooksCreateManyUserInputEnvelope } from './user-books-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';

@InputType()
export class UserBooksUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserBooksCreateWithoutUserInput], {nullable:true})
    @Type(() => UserBooksCreateWithoutUserInput)
    create?: Array<UserBooksCreateWithoutUserInput>;

    @Field(() => [UserBooksCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserBooksCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserBooksCreateOrConnectWithoutUserInput>;

    @Field(() => UserBooksCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserBooksCreateManyUserInputEnvelope)
    createMany?: UserBooksCreateManyUserInputEnvelope;

    @Field(() => [UserBooksWhereUniqueInput], {nullable:true})
    @Type(() => UserBooksWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>>;
}
