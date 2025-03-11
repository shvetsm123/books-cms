import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBookInput } from './user-update-without-book.input';
import { UserCreateWithoutBookInput } from './user-create-without-book.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutBookInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateWithoutBookInput, {nullable:false})
    @Type(() => UserUpdateWithoutBookInput)
    update!: UserUpdateWithoutBookInput;

    @Field(() => UserCreateWithoutBookInput, {nullable:false})
    @Type(() => UserCreateWithoutBookInput)
    create!: UserCreateWithoutBookInput;
}
