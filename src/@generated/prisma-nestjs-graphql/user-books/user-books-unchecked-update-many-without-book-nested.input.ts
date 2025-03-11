import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksCreateWithoutBookInput } from './user-books-create-without-book.input';
import { Type } from 'class-transformer';
import { UserBooksCreateOrConnectWithoutBookInput } from './user-books-create-or-connect-without-book.input';
import { UserBooksUpsertWithWhereUniqueWithoutBookInput } from './user-books-upsert-with-where-unique-without-book.input';
import { UserBooksCreateManyBookInputEnvelope } from './user-books-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { UserBooksUpdateWithWhereUniqueWithoutBookInput } from './user-books-update-with-where-unique-without-book.input';
import { UserBooksUpdateManyWithWhereWithoutBookInput } from './user-books-update-many-with-where-without-book.input';
import { UserBooksScalarWhereInput } from './user-books-scalar-where.input';

@InputType()
export class UserBooksUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [UserBooksCreateWithoutBookInput], {nullable:true})
    @Type(() => UserBooksCreateWithoutBookInput)
    create?: Array<UserBooksCreateWithoutBookInput>;

    @Field(() => [UserBooksCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserBooksCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserBooksCreateOrConnectWithoutBookInput>;

    @Field(() => [UserBooksUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserBooksUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<UserBooksUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => UserBooksCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserBooksCreateManyBookInputEnvelope)
    createMany?: UserBooksCreateManyBookInputEnvelope;

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

    @Field(() => [UserBooksUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserBooksUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<UserBooksUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [UserBooksUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => UserBooksUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<UserBooksUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [UserBooksScalarWhereInput], {nullable:true})
    @Type(() => UserBooksScalarWhereInput)
    deleteMany?: Array<UserBooksScalarWhereInput>;
}
