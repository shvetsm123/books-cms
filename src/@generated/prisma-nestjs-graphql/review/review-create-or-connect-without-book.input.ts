import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutBookInput } from './review-create-without-book.input';

@InputType()
export class ReviewCreateOrConnectWithoutBookInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutBookInput, {nullable:false})
    @Type(() => ReviewCreateWithoutBookInput)
    create!: ReviewCreateWithoutBookInput;
}
