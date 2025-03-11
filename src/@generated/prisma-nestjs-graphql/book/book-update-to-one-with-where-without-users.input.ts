import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { BookUpdateWithoutUsersInput } from './book-update-without-users.input';

@InputType()
export class BookUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;

    @Field(() => BookUpdateWithoutUsersInput, {nullable:false})
    @Type(() => BookUpdateWithoutUsersInput)
    data!: BookUpdateWithoutUsersInput;
}
