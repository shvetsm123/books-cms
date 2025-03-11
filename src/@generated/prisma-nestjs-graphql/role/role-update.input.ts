import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserRoleUpdateManyWithoutRoleNestedInput } from '../user-role/user-role-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserRoleUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserRoleUpdateManyWithoutRoleNestedInput;
}
