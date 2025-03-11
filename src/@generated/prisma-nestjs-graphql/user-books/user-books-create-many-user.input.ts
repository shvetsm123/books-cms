import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserBooksCreateManyUserInput {

    @Field(() => Int, {nullable:false})
    bookId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
