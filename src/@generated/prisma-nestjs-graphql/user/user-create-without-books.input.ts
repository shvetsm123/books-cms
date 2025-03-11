import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserRoleCreateNestedManyWithoutUserInput } from '../user-role/user-role-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutBooksInput {

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

    @Field(() => UserRoleCreateNestedManyWithoutUserInput, {nullable:true})
    roles?: UserRoleCreateNestedManyWithoutUserInput;
}
