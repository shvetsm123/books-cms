import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ActivityLogsService } from './activity-logs.service';

@Resolver()
export class ActivityLogsResolver {
  constructor(private readonly activityLogService: ActivityLogsService) {}

  @Mutation(() => String)
  async logActivity(
    @Args('userId') userId: number,
    @Args('activity') activity: string,
  ) {
    await this.activityLogService.logActivity(userId, activity);
    return 'Activity logged successfully!';
  }
}
