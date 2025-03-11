import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ReviewModel } from './model/review.model';

@Injectable()
export class ReviewsService {
  async getReviewsByBookId(bookId: number) {
    return ReviewModel.query('bookId').eq(bookId).exec();
  }

  async addReview(bookId: number, content: string, rating: number) {
    const review = {
      bookId,
      reviewId: uuid(),
      content,
      rating,
    };
    return ReviewModel.create(review);
  }
}
