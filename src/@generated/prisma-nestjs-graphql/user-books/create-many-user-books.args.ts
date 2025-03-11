import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBooksCreateManyInput } from './user-books-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserBooksArgs {

    @Field(() => [UserBooksCreateManyInput], {nullable:false})
    @Type(() => UserBooksCreateManyInput)
    data!: Array<UserBooksCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
