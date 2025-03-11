import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityLogWhereInput } from './activity-log-where.input';
import { Type } from 'class-transformer';
import { ActivityLogOrderByWithRelationInput } from './activity-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ActivityLogWhereUniqueInput } from './activity-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityLogScalarFieldEnum } from './activity-log-scalar-field.enum';

@ArgsType()
export class FindManyActivityLogArgs {

    @Field(() => ActivityLogWhereInput, {nullable:true})
    @Type(() => ActivityLogWhereInput)
    where?: ActivityLogWhereInput;

    @Field(() => [ActivityLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActivityLogOrderByWithRelationInput>;

    @Field(() => ActivityLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ActivityLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActivityLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ActivityLogScalarFieldEnum}`>;
}
