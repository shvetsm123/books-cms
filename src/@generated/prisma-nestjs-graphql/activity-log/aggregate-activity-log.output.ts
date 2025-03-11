import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityLogCountAggregate } from './activity-log-count-aggregate.output';
import { ActivityLogAvgAggregate } from './activity-log-avg-aggregate.output';
import { ActivityLogSumAggregate } from './activity-log-sum-aggregate.output';
import { ActivityLogMinAggregate } from './activity-log-min-aggregate.output';
import { ActivityLogMaxAggregate } from './activity-log-max-aggregate.output';

@ObjectType()
export class AggregateActivityLog {

    @Field(() => ActivityLogCountAggregate, {nullable:true})
    _count?: ActivityLogCountAggregate;

    @Field(() => ActivityLogAvgAggregate, {nullable:true})
    _avg?: ActivityLogAvgAggregate;

    @Field(() => ActivityLogSumAggregate, {nullable:true})
    _sum?: ActivityLogSumAggregate;

    @Field(() => ActivityLogMinAggregate, {nullable:true})
    _min?: ActivityLogMinAggregate;

    @Field(() => ActivityLogMaxAggregate, {nullable:true})
    _max?: ActivityLogMaxAggregate;
}
