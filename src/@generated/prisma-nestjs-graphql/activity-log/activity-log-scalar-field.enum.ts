import { registerEnumType } from '@nestjs/graphql';

export enum ActivityLogScalarFieldEnum {
    id = "id",
    action = "action",
    createdAt = "createdAt",
    userId = "userId"
}


registerEnumType(ActivityLogScalarFieldEnum, { name: 'ActivityLogScalarFieldEnum', description: undefined })
