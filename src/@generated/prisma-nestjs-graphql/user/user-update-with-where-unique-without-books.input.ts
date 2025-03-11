import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBooksInput } from './user-update-without-books.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutBooksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateWithoutBooksInput, {nullable:false})
    @Type(() => UserUpdateWithoutBooksInput)
    data!: UserUpdateWithoutBooksInput;
}
