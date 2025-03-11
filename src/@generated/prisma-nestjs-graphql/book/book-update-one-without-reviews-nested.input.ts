import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutReviewsInput } from './book-create-without-reviews.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutReviewsInput } from './book-create-or-connect-without-reviews.input';
import { BookUpsertWithoutReviewsInput } from './book-upsert-without-reviews.input';
import { BookWhereInput } from './book-where.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateToOneWithWhereWithoutReviewsInput } from './book-update-to-one-with-where-without-reviews.input';

@InputType()
export class BookUpdateOneWithoutReviewsNestedInput {

    @Field(() => BookCreateWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateWithoutReviewsInput)
    create?: BookCreateWithoutReviewsInput;

    @Field(() => BookCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: BookCreateOrConnectWithoutReviewsInput;

    @Field(() => BookUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => BookUpsertWithoutReviewsInput)
    upsert?: BookUpsertWithoutReviewsInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: BookWhereInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: BookWhereInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;

    @Field(() => BookUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutReviewsInput)
    update?: BookUpdateToOneWithWhereWithoutReviewsInput;
}
