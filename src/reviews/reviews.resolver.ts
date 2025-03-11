import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';

@Resolver('Book')
export class ReviewsResolver {
  constructor(private readonly reviewService: ReviewsService) {}

  @ResolveField('reviews')
  async reviews(@Parent() book: { id: number }) {
    return this.reviewService.getReviewsByBookId(book.id);
  }

  @Mutation('addReview')
  async addReview(
    @Args('bookId') bookId: number,
    @Args('content') content: string,
    @Args('rating') rating: number,
  ) {
    await this.reviewService.addReview(bookId, content, rating);
    return 'Review added successfully!';
  }
}
