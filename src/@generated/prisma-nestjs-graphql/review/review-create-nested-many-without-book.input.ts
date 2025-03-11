import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutBookInput } from './review-create-without-book.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutBookInput } from './review-create-or-connect-without-book.input';
import { ReviewCreateManyBookInputEnvelope } from './review-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutBookInput {

    @Field(() => [ReviewCreateWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutBookInput)
    create?: Array<ReviewCreateWithoutBookInput>;

    @Field(() => [ReviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;

    @Field(() => ReviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyBookInputEnvelope)
    createMany?: ReviewCreateManyBookInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}
