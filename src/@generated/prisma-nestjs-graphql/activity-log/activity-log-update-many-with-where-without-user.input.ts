import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLogScalarWhereInput } from './activity-log-scalar-where.input';
import { Type } from 'class-transformer';
import { ActivityLogUpdateManyMutationInput } from './activity-log-update-many-mutation.input';

@InputType()
export class ActivityLogUpdateManyWithWhereWithoutUserInput {

    @Field(() => ActivityLogScalarWhereInput, {nullable:false})
    @Type(() => ActivityLogScalarWhereInput)
    where!: ActivityLogScalarWhereInput;

    @Field(() => ActivityLogUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityLogUpdateManyMutationInput)
    data!: ActivityLogUpdateManyMutationInput;
}
