import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutReviewsInput } from './book-create-without-reviews.input';

@InputType()
export class BookCreateOrConnectWithoutReviewsInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;

    @Field(() => BookCreateWithoutReviewsInput, {nullable:false})
    @Type(() => BookCreateWithoutReviewsInput)
    create!: BookCreateWithoutReviewsInput;
}
