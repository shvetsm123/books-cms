import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutBookInput } from './review-create-without-book.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutBookInput } from './review-create-or-connect-without-book.input';
import { ReviewUpsertWithWhereUniqueWithoutBookInput } from './review-upsert-with-where-unique-without-book.input';
import { ReviewCreateManyBookInputEnvelope } from './review-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutBookInput } from './review-update-with-where-unique-without-book.input';
import { ReviewUpdateManyWithWhereWithoutBookInput } from './review-update-many-with-where-without-book.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [ReviewCreateWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutBookInput)
    create?: Array<ReviewCreateWithoutBookInput>;

    @Field(() => [ReviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => ReviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyBookInputEnvelope)
    createMany?: ReviewCreateManyBookInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
