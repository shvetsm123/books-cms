import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class UserRoleScalarWhereWithAggregatesInput {

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roleId?: IntWithAggregatesFilter;
}
