import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutUsersInput } from './book-create-without-users.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutUsersInput } from './book-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [BookCreateWithoutUsersInput], {nullable:true})
    @Type(() => BookCreateWithoutUsersInput)
    create?: Array<BookCreateWithoutUsersInput>;

    @Field(() => [BookCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => BookCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<BookCreateOrConnectWithoutUsersInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
}
