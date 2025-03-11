import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLogCreateWithoutUserInput } from './activity-log-create-without-user.input';
import { Type } from 'class-transformer';
import { ActivityLogCreateOrConnectWithoutUserInput } from './activity-log-create-or-connect-without-user.input';
import { ActivityLogUpsertWithWhereUniqueWithoutUserInput } from './activity-log-upsert-with-where-unique-without-user.input';
import { ActivityLogCreateManyUserInputEnvelope } from './activity-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ActivityLogWhereUniqueInput } from './activity-log-where-unique.input';
import { ActivityLogUpdateWithWhereUniqueWithoutUserInput } from './activity-log-update-with-where-unique-without-user.input';
import { ActivityLogUpdateManyWithWhereWithoutUserInput } from './activity-log-update-many-with-where-without-user.input';
import { ActivityLogScalarWhereInput } from './activity-log-scalar-where.input';

@InputType()
export class ActivityLogUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ActivityLogCreateWithoutUserInput], {nullable:true})
    @Type(() => ActivityLogCreateWithoutUserInput)
    create?: Array<ActivityLogCreateWithoutUserInput>;

    @Field(() => [ActivityLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ActivityLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ActivityLogCreateOrConnectWithoutUserInput>;

    @Field(() => [ActivityLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ActivityLogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ActivityLogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ActivityLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ActivityLogCreateManyUserInputEnvelope)
    createMany?: ActivityLogCreateManyUserInputEnvelope;

    @Field(() => [ActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ActivityLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ActivityLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ActivityLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityLogWhereUniqueInput], {nullable:true})
    @Type(() => ActivityLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>>;

    @Field(() => [ActivityLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ActivityLogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ActivityLogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ActivityLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ActivityLogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ActivityLogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ActivityLogScalarWhereInput], {nullable:true})
    @Type(() => ActivityLogScalarWhereInput)
    deleteMany?: Array<ActivityLogScalarWhereInput>;
}
