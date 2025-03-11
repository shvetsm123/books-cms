import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksWhereInput } from './user-books-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyUserBooksArgs {

    @Field(() => UserBooksWhereInput, {nullable:true})
    @Type(() => UserBooksWhereInput)
    where?: UserBooksWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
