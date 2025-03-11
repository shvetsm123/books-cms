import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBooksInput } from '../user/user-create-nested-one-without-books.input';
import { BookCreateNestedOneWithoutUsersInput } from '../book/book-create-nested-one-without-users.input';

@InputType()
export class UserBooksCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBooksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBooksInput;

    @Field(() => BookCreateNestedOneWithoutUsersInput, {nullable:false})
    book!: BookCreateNestedOneWithoutUsersInput;
}
