import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ActivityLogWhereInput {

    @Field(() => [ActivityLogWhereInput], {nullable:true})
    AND?: Array<ActivityLogWhereInput>;

    @Field(() => [ActivityLogWhereInput], {nullable:true})
    OR?: Array<ActivityLogWhereInput>;

    @Field(() => [ActivityLogWhereInput], {nullable:true})
    NOT?: Array<ActivityLogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
