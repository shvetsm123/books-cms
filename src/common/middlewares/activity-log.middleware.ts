import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { ActivityLogsService } from '../../activity-logs/activity-logs.service';

@Injectable()
export class ActivityLogMiddleware implements NestMiddleware {
  constructor(private readonly activityLogService: ActivityLogsService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const userId = Number(decoded['userId']);

    const activity = `${req.method} ${req.originalUrl}`;

    await this.activityLogService.logActivity(userId, activity);

    next();
  }
}
