import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { ActivityLogModel } from './model/activity-log.model';

@Injectable()
export class ActivityLogsService {
  async logActivity(userId: number, activity: string) {
    const timestamp = moment().toISOString();

    const activityLog = {
      userId,
      timestamp,
      activity,
    };

    try {
      await ActivityLogModel.create(activityLog);
      console.log('Activity logged successfully!');
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  }
}
