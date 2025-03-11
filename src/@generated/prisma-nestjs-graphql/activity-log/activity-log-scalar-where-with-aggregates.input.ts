import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ActivityLogScalarWhereWithAggregatesInput {

    @Field(() => [ActivityLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActivityLogScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActivityLogScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActivityLogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    action?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
