import { Module } from '@nestjs/common';
import { ActivityLogsService } from './activity-logs.service';
import { ActivityLogsResolver } from './activity-logs.resolver';

@Module({
  providers: [ActivityLogsService, ActivityLogsResolver],
  exports: [ActivityLogsService],
})
export class ActivityLogsModule {}
