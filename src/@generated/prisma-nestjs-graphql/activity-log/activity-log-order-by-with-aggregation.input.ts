import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActivityLogCountOrderByAggregateInput } from './activity-log-count-order-by-aggregate.input';
import { ActivityLogAvgOrderByAggregateInput } from './activity-log-avg-order-by-aggregate.input';
import { ActivityLogMaxOrderByAggregateInput } from './activity-log-max-order-by-aggregate.input';
import { ActivityLogMinOrderByAggregateInput } from './activity-log-min-order-by-aggregate.input';
import { ActivityLogSumOrderByAggregateInput } from './activity-log-sum-order-by-aggregate.input';

@InputType()
export class ActivityLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    action?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => ActivityLogCountOrderByAggregateInput, {nullable:true})
    _count?: ActivityLogCountOrderByAggregateInput;

    @Field(() => ActivityLogAvgOrderByAggregateInput, {nullable:true})
    _avg?: ActivityLogAvgOrderByAggregateInput;

    @Field(() => ActivityLogMaxOrderByAggregateInput, {nullable:true})
    _max?: ActivityLogMaxOrderByAggregateInput;

    @Field(() => ActivityLogMinOrderByAggregateInput, {nullable:true})
    _min?: ActivityLogMinOrderByAggregateInput;

    @Field(() => ActivityLogSumOrderByAggregateInput, {nullable:true})
    _sum?: ActivityLogSumOrderByAggregateInput;
}
