import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBooksInput } from './user-update-without-books.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBooksInput } from './user-create-without-books.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBooksInput {

    @Field(() => UserUpdateWithoutBooksInput, {nullable:false})
    @Type(() => UserUpdateWithoutBooksInput)
    update!: UserUpdateWithoutBooksInput;

    @Field(() => UserCreateWithoutBooksInput, {nullable:false})
    @Type(() => UserCreateWithoutBooksInput)
    create!: UserCreateWithoutBooksInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
