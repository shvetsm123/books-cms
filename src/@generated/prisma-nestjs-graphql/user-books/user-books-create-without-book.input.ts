import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBooksInput } from '../user/user-create-nested-one-without-books.input';

@InputType()
export class UserBooksCreateWithoutBookInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBooksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBooksInput;
}
