import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksCreateWithoutBookInput } from './user-books-create-without-book.input';
import { Type } from 'class-transformer';
import { UserBooksCreateOrConnectWithoutBookInput } from './user-books-create-or-connect-without-book.input';
import { UserBooksCreateManyBookInputEnvelope } from './user-books-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';

@InputType()
export class UserBooksUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [UserBooksCreateWithoutBookInput], {nullable:true})
    @Type(() => UserBooksCreateWithoutBookInput)
    create?: Array<UserBooksCreateWithoutBookInput>;

    @Field(() => [UserBooksCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserBooksCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserBooksCreateOrConnectWithoutBookInput>;

    @Field(() => UserBooksCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserBooksCreateManyBookInputEnvelope)
    createMany?: UserBooksCreateManyBookInputEnvelope;

    @Field(() => [UserBooksWhereUniqueInput], {nullable:true})
    @Type(() => UserBooksWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>>;
}
