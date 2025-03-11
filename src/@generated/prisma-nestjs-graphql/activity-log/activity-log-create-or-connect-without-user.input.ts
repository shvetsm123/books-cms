import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityLogWhereUniqueInput } from './activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityLogCreateWithoutUserInput } from './activity-log-create-without-user.input';

@InputType()
export class ActivityLogCreateOrConnectWithoutUserInput {

    @Field(() => ActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ActivityLogCreateWithoutUserInput, {nullable:false})
    @Type(() => ActivityLogCreateWithoutUserInput)
    create!: ActivityLogCreateWithoutUserInput;
}
