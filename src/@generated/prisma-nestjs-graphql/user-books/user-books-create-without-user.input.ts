import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateNestedOneWithoutUsersInput } from '../book/book-create-nested-one-without-users.input';

@InputType()
export class UserBooksCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => BookCreateNestedOneWithoutUsersInput, {nullable:false})
    book!: BookCreateNestedOneWithoutUsersInput;
}
