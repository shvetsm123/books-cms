import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityLogWhereUniqueInput } from './activity-log-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityLogCreateInput } from './activity-log-create.input';
import { ActivityLogUpdateInput } from './activity-log-update.input';

@ArgsType()
export class UpsertOneActivityLogArgs {

    @Field(() => ActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>;

    @Field(() => ActivityLogCreateInput, {nullable:false})
    @Type(() => ActivityLogCreateInput)
    create!: ActivityLogCreateInput;

    @Field(() => ActivityLogUpdateInput, {nullable:false})
    @Type(() => ActivityLogUpdateInput)
    update!: ActivityLogUpdateInput;
}
