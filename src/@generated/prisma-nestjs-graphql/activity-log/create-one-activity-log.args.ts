import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityLogCreateInput } from './activity-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActivityLogArgs {

    @Field(() => ActivityLogCreateInput, {nullable:false})
    @Type(() => ActivityLogCreateInput)
    data!: ActivityLogCreateInput;
}
