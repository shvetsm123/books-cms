import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { BookUpdateWithoutReviewsInput } from './book-update-without-reviews.input';

@InputType()
export class BookUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;

    @Field(() => BookUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => BookUpdateWithoutReviewsInput)
    data!: BookUpdateWithoutReviewsInput;
}
