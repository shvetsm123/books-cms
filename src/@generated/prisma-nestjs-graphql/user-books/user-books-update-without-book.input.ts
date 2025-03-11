import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBooksNestedInput } from '../user/user-update-one-required-without-books-nested.input';

@InputType()
export class UserBooksUpdateWithoutBookInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutBooksNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutBooksNestedInput;
}
