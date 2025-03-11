import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksWhereInput } from './user-books-where.input';
import { Type } from 'class-transformer';
import { UserBooksOrderByWithAggregationInput } from './user-books-order-by-with-aggregation.input';
import { UserBooksScalarFieldEnum } from './user-books-scalar-field.enum';
import { UserBooksScalarWhereWithAggregatesInput } from './user-books-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserBooksCountAggregateInput } from './user-books-count-aggregate.input';
import { UserBooksAvgAggregateInput } from './user-books-avg-aggregate.input';
import { UserBooksSumAggregateInput } from './user-books-sum-aggregate.input';
import { UserBooksMinAggregateInput } from './user-books-min-aggregate.input';
import { UserBooksMaxAggregateInput } from './user-books-max-aggregate.input';

@ArgsType()
export class UserBooksGroupByArgs {

    @Field(() => UserBooksWhereInput, {nullable:true})
    @Type(() => UserBooksWhereInput)
    where?: UserBooksWhereInput;

    @Field(() => [UserBooksOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserBooksOrderByWithAggregationInput>;

    @Field(() => [UserBooksScalarFieldEnum], {nullable:false})
    by!: Array<`${UserBooksScalarFieldEnum}`>;

    @Field(() => UserBooksScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserBooksScalarWhereWithAggregatesInput;

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
