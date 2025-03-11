import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityLogCreateManyInput } from './activity-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyActivityLogArgs {

    @Field(() => [ActivityLogCreateManyInput], {nullable:false})
    @Type(() => ActivityLogCreateManyInput)
    data!: Array<ActivityLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
