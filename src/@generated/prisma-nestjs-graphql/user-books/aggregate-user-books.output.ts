import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserBooksCountAggregate } from './user-books-count-aggregate.output';
import { UserBooksAvgAggregate } from './user-books-avg-aggregate.output';
import { UserBooksSumAggregate } from './user-books-sum-aggregate.output';
import { UserBooksMinAggregate } from './user-books-min-aggregate.output';
import { UserBooksMaxAggregate } from './user-books-max-aggregate.output';

@ObjectType()
export class AggregateUserBooks {

    @Field(() => UserBooksCountAggregate, {nullable:true})
    _count?: UserBooksCountAggregate;

    @Field(() => UserBooksAvgAggregate, {nullable:true})
    _avg?: UserBooksAvgAggregate;

    @Field(() => UserBooksSumAggregate, {nullable:true})
    _sum?: UserBooksSumAggregate;

    @Field(() => UserBooksMinAggregate, {nullable:true})
    _min?: UserBooksMinAggregate;

    @Field(() => UserBooksMaxAggregate, {nullable:true})
    _max?: UserBooksMaxAggregate;
}
