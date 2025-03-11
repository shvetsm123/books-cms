import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserBooksCreateNestedManyWithoutUserInput } from '../user-books/user-books-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutRolesInput {

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

    @Field(() => UserBooksCreateNestedManyWithoutUserInput, {nullable:true})
    books?: UserBooksCreateNestedManyWithoutUserInput;
}
