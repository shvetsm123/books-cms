import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksWhereInput } from './user-books-where.input';

@InputType()
export class UserBooksListRelationFilter {

    @Field(() => UserBooksWhereInput, {nullable:true})
    every?: UserBooksWhereInput;

    @Field(() => UserBooksWhereInput, {nullable:true})
    some?: UserBooksWhereInput;

    @Field(() => UserBooksWhereInput, {nullable:true})
    none?: UserBooksWhereInput;
}
