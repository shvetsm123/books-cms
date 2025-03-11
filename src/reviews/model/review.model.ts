import * as dynamoose from 'dynamoose';

export const ReviewSchema = new dynamoose.Schema({
  bookId: { type: Number, hashKey: true },
  reviewId: { type: String, rangeKey: true },
  content: String,
  rating: Number,
});

export const ReviewModel = dynamoose.model('Reviews', ReviewSchema);
