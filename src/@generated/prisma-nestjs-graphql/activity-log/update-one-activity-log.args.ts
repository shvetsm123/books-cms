import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityLogUpdateInput } from './activity-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ActivityLogWhereUniqueInput } from './activity-log-where-unique.input';

@ArgsType()
export class UpdateOneActivityLogArgs {

    @Field(() => ActivityLogUpdateInput, {nullable:false})
    @Type(() => ActivityLogUpdateInput)
    data!: ActivityLogUpdateInput;

    @Field(() => ActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>;
}
