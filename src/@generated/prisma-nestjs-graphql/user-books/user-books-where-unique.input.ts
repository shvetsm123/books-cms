import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksUserIdBookIdCompoundUniqueInput } from './user-books-user-id-book-id-compound-unique.input';
import { UserBooksWhereInput } from './user-books-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { BookScalarRelationFilter } from '../book/book-scalar-relation-filter.input';

@InputType()
export class UserBooksWhereUniqueInput {

    @Field(() => UserBooksUserIdBookIdCompoundUniqueInput, {nullable:true})
    userId_bookId?: UserBooksUserIdBookIdCompoundUniqueInput;

    @Field(() => [UserBooksWhereInput], {nullable:true})
    AND?: Array<UserBooksWhereInput>;

    @Field(() => [UserBooksWhereInput], {nullable:true})
    OR?: Array<UserBooksWhereInput>;

    @Field(() => [UserBooksWhereInput], {nullable:true})
    NOT?: Array<UserBooksWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    bookId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: BookScalarRelationFilter;
}
