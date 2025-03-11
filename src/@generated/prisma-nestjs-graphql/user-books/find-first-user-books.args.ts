import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksWhereInput } from './user-books-where.input';
import { Type } from 'class-transformer';
import { UserBooksOrderByWithRelationInput } from './user-books-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserBooksScalarFieldEnum } from './user-books-scalar-field.enum';

@ArgsType()
export class FindFirstUserBooksArgs {

    @Field(() => UserBooksWhereInput, {nullable:true})
    @Type(() => UserBooksWhereInput)
    where?: UserBooksWhereInput;

    @Field(() => [UserBooksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBooksOrderByWithRelationInput>;

    @Field(() => UserBooksWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBooksWhereUniqueInput, 'userId_bookId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserBooksScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserBooksScalarFieldEnum}`>;
}
