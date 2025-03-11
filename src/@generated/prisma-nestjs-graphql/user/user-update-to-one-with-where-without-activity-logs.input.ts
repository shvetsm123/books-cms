import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutActivityLogsInput } from './user-update-without-activity-logs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutActivityLogsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutActivityLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutActivityLogsInput)
    data!: UserUpdateWithoutActivityLogsInput;
}
