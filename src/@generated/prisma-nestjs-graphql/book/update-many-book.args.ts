import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookUpdateManyMutationInput } from './book-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BookWhereInput } from './book-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBookArgs {

    @Field(() => BookUpdateManyMutationInput, {nullable:false})
    @Type(() => BookUpdateManyMutationInput)
    data!: BookUpdateManyMutationInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
