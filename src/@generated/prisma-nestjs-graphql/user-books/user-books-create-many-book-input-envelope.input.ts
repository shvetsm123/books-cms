import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBooksCreateManyBookInput } from './user-books-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class UserBooksCreateManyBookInputEnvelope {

    @Field(() => [UserBooksCreateManyBookInput], {nullable:false})
    @Type(() => UserBooksCreateManyBookInput)
    data!: Array<UserBooksCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
