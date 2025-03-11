import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksCreateManyUserInput } from './user-books-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserBooksCreateManyUserInputEnvelope {

    @Field(() => [UserBooksCreateManyUserInput], {nullable:false})
    @Type(() => UserBooksCreateManyUserInput)
    data!: Array<UserBooksCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
