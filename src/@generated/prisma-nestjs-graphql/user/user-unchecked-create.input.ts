import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserBooksUncheckedCreateNestedManyWithoutUserInput } from '../user-books/user-books-unchecked-create-nested-many-without-user.input';
import { UserRoleUncheckedCreateNestedManyWithoutUserInput } from '../user-role/user-role-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    passwordHash!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserBooksUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    books?: UserBooksUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;
}
