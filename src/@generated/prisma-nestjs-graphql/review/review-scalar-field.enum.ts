import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    content = "content",
    rating = "rating",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    bookId = "bookId",
    userId = "userId"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
