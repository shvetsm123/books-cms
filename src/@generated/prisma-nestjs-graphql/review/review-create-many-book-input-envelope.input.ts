import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyBookInput } from './review-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyBookInputEnvelope {

    @Field(() => [ReviewCreateManyBookInput], {nullable:false})
    @Type(() => ReviewCreateManyBookInput)
    data!: Array<ReviewCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
