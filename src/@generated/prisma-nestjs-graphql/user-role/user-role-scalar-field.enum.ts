import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleScalarFieldEnum {
    userId = "userId",
    roleId = "roleId"
}


registerEnumType(UserRoleScalarFieldEnum, { name: 'UserRoleScalarFieldEnum', description: undefined })
