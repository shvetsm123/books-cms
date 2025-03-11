import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserBooksScalarWhereInput {

    @Field(() => [UserBooksScalarWhereInput], {nullable:true})
    AND?: Array<UserBooksScalarWhereInput>;

    @Field(() => [UserBooksScalarWhereInput], {nullable:true})
    OR?: Array<UserBooksScalarWhereInput>;

    @Field(() => [UserBooksScalarWhereInput], {nullable:true})
    NOT?: Array<UserBooksScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    bookId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
