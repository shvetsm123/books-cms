import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityLogUpdateManyMutationInput } from './activity-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActivityLogWhereInput } from './activity-log-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyActivityLogArgs {

    @Field(() => ActivityLogUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityLogUpdateManyMutationInput)
    data!: ActivityLogUpdateManyMutationInput;

    @Field(() => ActivityLogWhereInput, {nullable:true})
    @Type(() => ActivityLogWhereInput)
    where?: ActivityLogWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
