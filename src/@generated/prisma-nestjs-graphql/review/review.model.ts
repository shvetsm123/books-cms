import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Book } from '../book/book.model';
import { User } from '../user/user.model';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    bookId!: number | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Book, {nullable:true})
    book?: Book | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
