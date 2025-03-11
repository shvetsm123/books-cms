import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
    id = "id",
    author = "author",
    title = "title",
    publicationYear = "publicationYear",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
