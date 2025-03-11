import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewsInput } from './user-create-without-reviews.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewsInput } from './user-create-or-connect-without-reviews.input';
import { UserUpsertWithoutReviewsInput } from './user-upsert-without-reviews.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReviewsInput } from './user-update-to-one-with-where-without-reviews.input';

@InputType()
export class UserUpdateOneWithoutReviewsNestedInput {

    @Field(() => UserCreateWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewsInput)
    create?: UserCreateWithoutReviewsInput;

    @Field(() => UserCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;

    @Field(() => UserUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewsInput)
    upsert?: UserUpsertWithoutReviewsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReviewsInput)
    update?: UserUpdateToOneWithWhereWithoutReviewsInput;
}
