import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ActivityLogUncheckedUpdateManyWithoutUserNestedInput } from '../activity-log/activity-log-unchecked-update-many-without-user-nested.input';
import { UserBooksUncheckedUpdateManyWithoutUserNestedInput } from '../user-books/user-books-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutReviewsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passwordHash?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ActivityLogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserBooksUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    books?: UserBooksUncheckedUpdateManyWithoutUserNestedInput;
}
