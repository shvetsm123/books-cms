import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksCreateInput } from './user-books-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserBooksArgs {

    @Field(() => UserBooksCreateInput, {nullable:false})
    @Type(() => UserBooksCreateInput)
    data!: UserBooksCreateInput;
}
