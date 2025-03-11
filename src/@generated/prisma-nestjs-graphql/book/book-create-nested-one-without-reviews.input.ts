import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutReviewsInput } from './book-create-without-reviews.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutReviewsInput } from './book-create-or-connect-without-reviews.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedOneWithoutReviewsInput {

    @Field(() => BookCreateWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateWithoutReviewsInput)
    create?: BookCreateWithoutReviewsInput;

    @Field(() => BookCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: BookCreateOrConnectWithoutReviewsInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}
