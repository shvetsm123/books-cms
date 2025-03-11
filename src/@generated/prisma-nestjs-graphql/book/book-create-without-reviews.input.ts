import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { UserBooksCreateNestedManyWithoutBookInput } from '../user-books/user-books-create-nested-many-without-book.input';

@InputType()
export class BookCreateWithoutReviewsInput {

    @Field(() => String, {nullable:false})
    @Validator.Length(3, 24)
    author!: string;

    @Field(() => String, {nullable:false})
    @Validator.Length(3, 48)
    title!: string;

    @Field(() => Int, {nullable:false})
    @Validator.Min(0) @Validator.Max(2025)
    publicationYear!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserBooksCreateNestedManyWithoutBookInput, {nullable:true})
    users?: UserBooksCreateNestedManyWithoutBookInput;
}
