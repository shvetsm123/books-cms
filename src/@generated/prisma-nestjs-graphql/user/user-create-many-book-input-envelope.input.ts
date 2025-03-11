import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyBookInput } from './user-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyBookInputEnvelope {

    @Field(() => [UserCreateManyBookInput], {nullable:false})
    @Type(() => UserCreateManyBookInput)
    data!: Array<UserCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
