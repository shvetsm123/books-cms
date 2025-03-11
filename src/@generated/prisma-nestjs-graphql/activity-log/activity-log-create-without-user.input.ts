import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityLogCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
