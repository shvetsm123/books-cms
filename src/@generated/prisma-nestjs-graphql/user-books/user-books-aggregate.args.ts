import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksWhereInput } from './user-books-where.input';
import { Type } from 'class-transformer';
import { UserBooksOrderByWithRelationInput } from './user-books-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserBooksWhereUniqueInput } from './user-books-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserBooksCountAggregateInput } from './user-books-count-aggregate.input';
import { UserBooksAvgAggregateInput } from './user-books-avg-aggregate.input';
import { UserBooksSumAggregateInput } from './user-books-sum-aggregate.input';
import { UserBooksMinAggregateInput } from './user-books-min-aggregate.input';
import { UserBooksMaxAggregateInput } from './user-books-max-aggregate.input';

@ArgsType()
export class UserBooksAggregateArgs {

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

    @Field(() => UserBooksCountAggregateInput, {nullable:true})
    _count?: UserBooksCountAggregateInput;

    @Field(() => UserBooksAvgAggregateInput, {nullable:true})
    _avg?: UserBooksAvgAggregateInput;

    @Field(() => UserBooksSumAggregateInput, {nullable:true})
    _sum?: UserBooksSumAggregateInput;

    @Field(() => UserBooksMinAggregateInput, {nullable:true})
    _min?: UserBooksMinAggregateInput;

    @Field(() => UserBooksMaxAggregateInput, {nullable:true})
    _max?: UserBooksMaxAggregateInput;
}
