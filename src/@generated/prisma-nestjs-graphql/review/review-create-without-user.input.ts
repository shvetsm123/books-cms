import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { BookCreateNestedOneWithoutReviewsInput } from '../book/book-create-nested-one-without-reviews.input';

@InputType()
export class ReviewCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    @Validator.Length(6, 255)
    content!: string;

    @Field(() => Int, {nullable:false})
    @Validator.Min(1) @Validator.Max(5)
    rating!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BookCreateNestedOneWithoutReviewsInput, {nullable:true})
    book?: BookCreateNestedOneWithoutReviewsInput;
}
