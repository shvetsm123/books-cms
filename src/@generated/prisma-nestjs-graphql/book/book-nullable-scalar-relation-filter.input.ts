import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';

@InputType()
export class BookNullableScalarRelationFilter {

    @Field(() => BookWhereInput, {nullable:true})
    is?: BookWhereInput;

    @Field(() => BookWhereInput, {nullable:true})
    isNot?: BookWhereInput;
}
