import { registerEnumType } from '@nestjs/graphql';

export enum UserBooksScalarFieldEnum {
    userId = "userId",
    bookId = "bookId",
    createdAt = "createdAt"
}


registerEnumType(UserBooksScalarFieldEnum, { name: 'UserBooksScalarFieldEnum', description: undefined })
