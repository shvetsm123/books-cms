import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserBooksCountOrderByAggregateInput } from './user-books-count-order-by-aggregate.input';
import { UserBooksAvgOrderByAggregateInput } from './user-books-avg-order-by-aggregate.input';
import { UserBooksMaxOrderByAggregateInput } from './user-books-max-order-by-aggregate.input';
import { UserBooksMinOrderByAggregateInput } from './user-books-min-order-by-aggregate.input';
import { UserBooksSumOrderByAggregateInput } from './user-books-sum-order-by-aggregate.input';

@InputType()
export class UserBooksOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => UserBooksCountOrderByAggregateInput, {nullable:true})
    _count?: UserBooksCountOrderByAggregateInput;

    @Field(() => UserBooksAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserBooksAvgOrderByAggregateInput;

    @Field(() => UserBooksMaxOrderByAggregateInput, {nullable:true})
    _max?: UserBooksMaxOrderByAggregateInput;

    @Field(() => UserBooksMinOrderByAggregateInput, {nullable:true})
    _min?: UserBooksMinOrderByAggregateInput;

    @Field(() => UserBooksSumOrderByAggregateInput, {nullable:true})
    _sum?: UserBooksSumOrderByAggregateInput;
}
