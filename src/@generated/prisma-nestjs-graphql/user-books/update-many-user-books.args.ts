import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksUpdateManyMutationInput } from './user-books-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserBooksWhereInput } from './user-books-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUserBooksArgs {

    @Field(() => UserBooksUpdateManyMutationInput, {nullable:false})
    @Type(() => UserBooksUpdateManyMutationInput)
    data!: UserBooksUpdateManyMutationInput;

    @Field(() => UserBooksWhereInput, {nullable:true})
    @Type(() => UserBooksWhereInput)
    where?: UserBooksWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
