import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksScalarWhereInput } from './user-books-scalar-where.input';
import { Type } from 'class-transformer';
import { UserBooksUpdateManyMutationInput } from './user-books-update-many-mutation.input';

@InputType()
export class UserBooksUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserBooksScalarWhereInput, {nullable:false})
    @Type(() => UserBooksScalarWhereInput)
    where!: UserBooksScalarWhereInput;

    @Field(() => UserBooksUpdateManyMutationInput, {nullable:false})
    @Type(() => UserBooksUpdateManyMutationInput)
    data!: UserBooksUpdateManyMutationInput;
}
