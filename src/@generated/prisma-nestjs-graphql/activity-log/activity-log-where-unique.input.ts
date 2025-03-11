import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityLogWhereInput } from './activity-log-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ActivityLogWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ActivityLogWhereInput], {nullable:true})
    AND?: Array<ActivityLogWhereInput>;

    @Field(() => [ActivityLogWhereInput], {nullable:true})
    OR?: Array<ActivityLogWhereInput>;

    @Field(() => [ActivityLogWhereInput], {nullable:true})
    NOT?: Array<ActivityLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
