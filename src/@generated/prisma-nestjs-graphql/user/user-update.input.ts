import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserBooksUpdateManyWithoutUserNestedInput } from '../user-books/user-books-update-many-without-user-nested.input';
import { UserRoleUpdateManyWithoutUserNestedInput } from '../user-role/user-role-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passwordHash?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserBooksUpdateManyWithoutUserNestedInput, {nullable:true})
    books?: UserBooksUpdateManyWithoutUserNestedInput;

    @Field(() => UserRoleUpdateManyWithoutUserNestedInput, {nullable:true})
    roles?: UserRoleUpdateManyWithoutUserNestedInput;
}
