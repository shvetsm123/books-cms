import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityLogWhereInput } from './activity-log-where.input';
import { Type } from 'class-transformer';
import { ActivityLogOrderByWithAggregationInput } from './activity-log-order-by-with-aggregation.input';
import { ActivityLogScalarFieldEnum } from './activity-log-scalar-field.enum';
import { ActivityLogScalarWhereWithAggregatesInput } from './activity-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActivityLogCountAggregateInput } from './activity-log-count-aggregate.input';
import { ActivityLogAvgAggregateInput } from './activity-log-avg-aggregate.input';
import { ActivityLogSumAggregateInput } from './activity-log-sum-aggregate.input';
import { ActivityLogMinAggregateInput } from './activity-log-min-aggregate.input';
import { ActivityLogMaxAggregateInput } from './activity-log-max-aggregate.input';

@ArgsType()
export class ActivityLogGroupByArgs {

    @Field(() => ActivityLogWhereInput, {nullable:true})
    @Type(() => ActivityLogWhereInput)
    where?: ActivityLogWhereInput;

    @Field(() => [ActivityLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActivityLogOrderByWithAggregationInput>;

    @Field(() => [ActivityLogScalarFieldEnum], {nullable:false})
    by!: Array<`${ActivityLogScalarFieldEnum}`>;

    @Field(() => ActivityLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActivityLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActivityLogCountAggregateInput, {nullable:true})
    _count?: ActivityLogCountAggregateInput;

    @Field(() => ActivityLogAvgAggregateInput, {nullable:true})
    _avg?: ActivityLogAvgAggregateInput;

    @Field(() => ActivityLogSumAggregateInput, {nullable:true})
    _sum?: ActivityLogSumAggregateInput;

    @Field(() => ActivityLogMinAggregateInput, {nullable:true})
    _min?: ActivityLogMinAggregateInput;

    @Field(() => ActivityLogMaxAggregateInput, {nullable:true})
    _max?: ActivityLogMaxAggregateInput;
}
