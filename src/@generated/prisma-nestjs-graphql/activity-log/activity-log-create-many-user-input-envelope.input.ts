import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLogCreateManyUserInput } from './activity-log-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ActivityLogCreateManyUserInputEnvelope {

    @Field(() => [ActivityLogCreateManyUserInput], {nullable:false})
    @Type(() => ActivityLogCreateManyUserInput)
    data!: Array<ActivityLogCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
