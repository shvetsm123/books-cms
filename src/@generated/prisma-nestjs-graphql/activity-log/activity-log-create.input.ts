import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutActivityLogsInput } from '../user/user-create-nested-one-without-activity-logs.input';

@InputType()
export class ActivityLogCreateInput {

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutActivityLogsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutActivityLogsInput;
}
