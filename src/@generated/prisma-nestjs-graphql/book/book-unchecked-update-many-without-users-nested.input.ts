import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutUsersInput } from './book-create-without-users.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutUsersInput } from './book-create-or-connect-without-users.input';
import { BookUpsertWithWhereUniqueWithoutUsersInput } from './book-upsert-with-where-unique-without-users.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithWhereUniqueWithoutUsersInput } from './book-update-with-where-unique-without-users.input';
import { BookUpdateManyWithWhereWithoutUsersInput } from './book-update-many-with-where-without-users.input';
import { BookScalarWhereInput } from './book-scalar-where.input';

@InputType()
export class BookUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [BookCreateWithoutUsersInput], {nullable:true})
    @Type(() => BookCreateWithoutUsersInput)
    create?: Array<BookCreateWithoutUsersInput>;

    @Field(() => [BookCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => BookCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<BookCreateOrConnectWithoutUsersInput>;

    @Field(() => [BookUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => BookUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<BookUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;

    @Field(() => [BookUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => BookUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<BookUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [BookUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => BookUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<BookUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [BookScalarWhereInput], {nullable:true})
    @Type(() => BookScalarWhereInput)
    deleteMany?: Array<BookScalarWhereInput>;
}
