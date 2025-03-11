import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutUserInput } from './review-update-without-user.input';
import { ReviewCreateWithoutUserInput } from './review-create-without-user.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserInput)
    update!: ReviewUpdateWithoutUserInput;

    @Field(() => ReviewCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCreateWithoutUserInput)
    create!: ReviewCreateWithoutUserInput;
}
