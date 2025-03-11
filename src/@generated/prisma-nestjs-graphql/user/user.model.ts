import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserBooks } from '../user-books/user-books.model';
import { UserRole } from '../user-role/user-role.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    passwordHash!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserBooks], {nullable:true})
    books?: Array<UserBooks>;

    @Field(() => [UserRole], {nullable:true})
    roles?: Array<UserRole>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
