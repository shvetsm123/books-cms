import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUpdateWithoutReviewsInput } from './book-update-without-reviews.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutReviewsInput } from './book-create-without-reviews.input';
import { BookWhereInput } from './book-where.input';

@InputType()
export class BookUpsertWithoutReviewsInput {

    @Field(() => BookUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => BookUpdateWithoutReviewsInput)
    update!: BookUpdateWithoutReviewsInput;

    @Field(() => BookCreateWithoutReviewsInput, {nullable:false})
    @Type(() => BookCreateWithoutReviewsInput)
    create!: BookCreateWithoutReviewsInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;
}
