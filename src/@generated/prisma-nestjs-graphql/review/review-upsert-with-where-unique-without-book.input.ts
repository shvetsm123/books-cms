import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutBookInput } from './review-update-without-book.input';
import { ReviewCreateWithoutBookInput } from './review-create-without-book.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutBookInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutBookInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutBookInput)
    update!: ReviewUpdateWithoutBookInput;

    @Field(() => ReviewCreateWithoutBookInput, {nullable:false})
    @Type(() => ReviewCreateWithoutBookInput)
    create!: ReviewCreateWithoutBookInput;
}
