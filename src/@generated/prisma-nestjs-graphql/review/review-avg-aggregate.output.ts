import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReviewAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => Float, {nullable:true})
    bookId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;
}
