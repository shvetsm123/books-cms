import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLogWhereInput } from './activity-log-where.input';

@InputType()
export class ActivityLogListRelationFilter {

    @Field(() => ActivityLogWhereInput, {nullable:true})
    every?: ActivityLogWhereInput;

    @Field(() => ActivityLogWhereInput, {nullable:true})
    some?: ActivityLogWhereInput;

    @Field(() => ActivityLogWhereInput, {nullable:true})
    none?: ActivityLogWhereInput;
}
