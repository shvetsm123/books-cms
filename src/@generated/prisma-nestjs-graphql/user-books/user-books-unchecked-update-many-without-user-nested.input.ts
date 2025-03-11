import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksCreateWithoutUserInput } from './user-books-create-without-user.input';
import { Type } from 'class-transformer';
import { UserBooksCreateOrConnectWithoutUserInput } from './user-books-create-or-connect-without-user.input';
import { UserBooksUpsertWithWhereUniqueWithoutUserInput } from './user-books-upsert-with-where-unique-without-user.input';
import { UserBooksCreateManyUserInputEnvelope } from './user-books-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { UserBooksUpdateWithWhereUniqueWithoutUserInput } from './user-books-update-with-where-unique-without-user.input';
import { UserBooksUpdateManyWithWhereWithoutUserInput } from './user-books-update-many-with-where-without-user.input';
import { UserBooksScalarWhereInput } from './user-books-scalar-where.input';

@InputType()
export class UserBooksUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserBooksCreateWithoutUserInput], {nullable:true})
    @Type(() => UserBooksCreateWithoutUserInput)
    create?: Array<UserBooksCreateWithoutUserInput>;

    @Field(() => [UserBooksCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserBooksCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserBooksCreateOrConnectWithoutUserInput>;

    @Field(() => [UserBooksUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserBooksUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserBooksUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserBooksCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserBooksCreateManyUserInputEnvelope)
    createMany?: UserBooksCreateManyUserInputEnvelope;

    @Field(() => [UserBooksWhereUniqueInput], {nullable:true})
    @Type(() => UserBooksWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>>;

    @Field(() => [UserBooksWhereUniqueInput], {nullable:true})
    @Type(() => UserBooksWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>>;

    @Field(() => [UserBooksWhereUniqueInput], {nullable:true})
    @Type(() => UserBooksWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>>;

    @Field(() => [UserBooksWhereUniqueInput], {nullable:true})
    @Type(() => UserBooksWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>>;

    @Field(() => [UserBooksUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserBooksUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserBooksUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserBooksUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserBooksUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserBooksUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserBooksScalarWhereInput], {nullable:true})
    @Type(() => UserBooksScalarWhereInput)
    deleteMany?: Array<UserBooksScalarWhereInput>;
}
