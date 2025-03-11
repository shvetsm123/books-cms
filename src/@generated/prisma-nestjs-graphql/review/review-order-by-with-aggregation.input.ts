import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCountOrderByAggregateInput } from './review-count-order-by-aggregate.input';
import { ReviewAvgOrderByAggregateInput } from './review-avg-order-by-aggregate.input';
import { ReviewMaxOrderByAggregateInput } from './review-max-order-by-aggregate.input';
import { ReviewMinOrderByAggregateInput } from './review-min-order-by-aggregate.input';
import { ReviewSumOrderByAggregateInput } from './review-sum-order-by-aggregate.input';

@InputType()
export class ReviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    bookId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => ReviewCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCountOrderByAggregateInput;

    @Field(() => ReviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewAvgOrderByAggregateInput;

    @Field(() => ReviewMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewMaxOrderByAggregateInput;

    @Field(() => ReviewMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewMinOrderByAggregateInput;

    @Field(() => ReviewSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewSumOrderByAggregateInput;
}
