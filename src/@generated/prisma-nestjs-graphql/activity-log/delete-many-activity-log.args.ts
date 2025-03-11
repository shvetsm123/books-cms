import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityLogWhereInput } from './activity-log-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyActivityLogArgs {

    @Field(() => ActivityLogWhereInput, {nullable:true})
    @Type(() => ActivityLogWhereInput)
    where?: ActivityLogWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
