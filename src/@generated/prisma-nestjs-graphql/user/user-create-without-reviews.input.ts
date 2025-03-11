import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ActivityLogCreateNestedManyWithoutUserInput } from '../activity-log/activity-log-create-nested-many-without-user.input';
import { UserBooksCreateNestedManyWithoutUserInput } from '../user-books/user-books-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutReviewsInput {

    @Field(() => String, {nullable:false})
    @Validator.Length(3, 24)
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    passwordHash!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ActivityLogCreateNestedManyWithoutUserInput, {nullable:true})
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput;

    @Field(() => UserBooksCreateNestedManyWithoutUserInput, {nullable:true})
    books?: UserBooksCreateNestedManyWithoutUserInput;
}
