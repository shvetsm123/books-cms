import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserRoleCreateManyRoleInput {

    @Field(() => Int, {nullable:false})
    userId!: number;
}
