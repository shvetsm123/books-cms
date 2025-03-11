import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserBooksOrderByRelationAggregateInput } from '../user-books/user-books-order-by-relation-aggregate.input';
import { UserRoleOrderByRelationAggregateInput } from '../user-role/user-role-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    passwordHash?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserBooksOrderByRelationAggregateInput, {nullable:true})
    books?: UserBooksOrderByRelationAggregateInput;

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    roles?: UserRoleOrderByRelationAggregateInput;
}
