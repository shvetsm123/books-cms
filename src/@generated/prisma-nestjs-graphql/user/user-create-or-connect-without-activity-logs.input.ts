import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutActivityLogsInput } from './user-create-without-activity-logs.input';

@InputType()
export class UserCreateOrConnectWithoutActivityLogsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutActivityLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutActivityLogsInput)
    create!: UserCreateWithoutActivityLogsInput;
}
