import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateNestedManyWithoutRoleInput } from '../user-role/user-role-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserRoleCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserRoleCreateNestedManyWithoutRoleInput;
}
