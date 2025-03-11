import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserBooksUncheckedCreateNestedManyWithoutBookInput } from '../user-books/user-books-unchecked-create-nested-many-without-book.input';

@InputType()
export class BookUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserBooksUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    users?: UserBooksUncheckedCreateNestedManyWithoutBookInput;
}
