import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserBooksScalarWhereWithAggregatesInput {

    @Field(() => [UserBooksScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserBooksScalarWhereWithAggregatesInput>;

    @Field(() => [UserBooksScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserBooksScalarWhereWithAggregatesInput>;

    @Field(() => [UserBooksScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserBooksScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    bookId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
