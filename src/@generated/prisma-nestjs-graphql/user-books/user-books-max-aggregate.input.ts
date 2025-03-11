import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserBooksMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    bookId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
