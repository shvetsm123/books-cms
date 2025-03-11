import * as dynamoose from 'dynamoose';

export const ActivityLogSchema = new dynamoose.Schema({
  userId: { type: Number, hashKey: true },
  timestamp: { type: String, rangeKey: true },
  activity: String,
});

export const ActivityLogModel = dynamoose.model(
  'ActivityLogs',
  ActivityLogSchema,
);
