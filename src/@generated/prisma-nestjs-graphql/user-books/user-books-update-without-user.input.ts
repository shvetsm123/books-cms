import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BookUpdateOneRequiredWithoutUsersNestedInput } from '../book/book-update-one-required-without-users-nested.input';

@InputType()
export class UserBooksUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BookUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    book?: BookUpdateOneRequiredWithoutUsersNestedInput;
}
