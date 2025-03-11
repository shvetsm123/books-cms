import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLogCreateWithoutUserInput } from './activity-log-create-without-user.input';
import { Type } from 'class-transformer';
import { ActivityLogCreateOrConnectWithoutUserInput } from './activity-log-create-or-connect-without-user.input';
import { ActivityLogCreateManyUserInputEnvelope } from './activity-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ActivityLogWhereUniqueInput } from './activity-log-where-unique.input';

@InputType()
export class ActivityLogCreateNestedManyWithoutUserInput {

    @Field(() => [ActivityLogCreateWithoutUserInput], {nullable:true})
    @Type(() => ActivityLogCreateWithoutUserInput)
    create?: Array<ActivityLogCreateWithoutUserInput>;

    @Field(() => [ActivityLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ActivityLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ActivityLogCreateOrConnectWithoutUserInput>;

    @Field(() => ActivityLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ActivityLogCreateManyUserInputEnvelope)
    createMany?: ActivityLogCreateManyUserInputEnvelope;

    @Field(() => [ActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ActivityLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>>;
}
