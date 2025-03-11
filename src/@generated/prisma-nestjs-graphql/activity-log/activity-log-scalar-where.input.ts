import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ActivityLogScalarWhereInput {

    @Field(() => [ActivityLogScalarWhereInput], {nullable:true})
    AND?: Array<ActivityLogScalarWhereInput>;

    @Field(() => [ActivityLogScalarWhereInput], {nullable:true})
    OR?: Array<ActivityLogScalarWhereInput>;

    @Field(() => [ActivityLogScalarWhereInput], {nullable:true})
    NOT?: Array<ActivityLogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
