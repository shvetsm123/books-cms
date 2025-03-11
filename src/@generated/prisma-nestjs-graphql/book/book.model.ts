import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserBooks } from '../user-books/user-books.model';
import { BookCount } from './book-count.output';

@ObjectType()
export class Book {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    author!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    publicationYear!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserBooks], {nullable:true})
    users?: Array<UserBooks>;

    @Field(() => BookCount, {nullable:false})
    _count?: BookCount;
}
