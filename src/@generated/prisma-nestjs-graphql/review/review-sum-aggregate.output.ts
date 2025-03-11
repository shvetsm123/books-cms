import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => Int, {nullable:true})
    bookId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
