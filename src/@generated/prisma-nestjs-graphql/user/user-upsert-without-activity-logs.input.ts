import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutActivityLogsInput } from './user-update-without-activity-logs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutActivityLogsInput } from './user-create-without-activity-logs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutActivityLogsInput {

    @Field(() => UserUpdateWithoutActivityLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutActivityLogsInput)
    update!: UserUpdateWithoutActivityLogsInput;

    @Field(() => UserCreateWithoutActivityLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutActivityLogsInput)
    create!: UserCreateWithoutActivityLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
