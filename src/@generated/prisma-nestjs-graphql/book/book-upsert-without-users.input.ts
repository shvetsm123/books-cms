import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUpdateWithoutUsersInput } from './book-update-without-users.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutUsersInput } from './book-create-without-users.input';
import { BookWhereInput } from './book-where.input';

@InputType()
export class BookUpsertWithoutUsersInput {

    @Field(() => BookUpdateWithoutUsersInput, {nullable:false})
    @Type(() => BookUpdateWithoutUsersInput)
    update!: BookUpdateWithoutUsersInput;

    @Field(() => BookCreateWithoutUsersInput, {nullable:false})
    @Type(() => BookCreateWithoutUsersInput)
    create!: BookCreateWithoutUsersInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;
}
