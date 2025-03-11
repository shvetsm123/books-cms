import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityLogWhereUniqueInput } from './activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityLogUpdateWithoutUserInput } from './activity-log-update-without-user.input';
import { ActivityLogCreateWithoutUserInput } from './activity-log-create-without-user.input';

@InputType()
export class ActivityLogUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ActivityLogUpdateWithoutUserInput, {nullable:false})
    @Type(() => ActivityLogUpdateWithoutUserInput)
    update!: ActivityLogUpdateWithoutUserInput;

    @Field(() => ActivityLogCreateWithoutUserInput, {nullable:false})
    @Type(() => ActivityLogCreateWithoutUserInput)
    create!: ActivityLogCreateWithoutUserInput;
}
