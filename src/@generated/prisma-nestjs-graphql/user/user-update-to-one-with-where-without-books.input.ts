import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBooksInput } from './user-update-without-books.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBooksInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBooksInput, {nullable:false})
    @Type(() => UserUpdateWithoutBooksInput)
    data!: UserUpdateWithoutBooksInput;
}
