import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutActivityLogsInput } from './user-create-without-activity-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutActivityLogsInput } from './user-create-or-connect-without-activity-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutActivityLogsInput {

    @Field(() => UserCreateWithoutActivityLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutActivityLogsInput)
    create?: UserCreateWithoutActivityLogsInput;

    @Field(() => UserCreateOrConnectWithoutActivityLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutActivityLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
