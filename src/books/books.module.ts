import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ActivityLogsModule } from '../activity-logs/activity-logs.module';

@Module({
  providers: [PrismaService, BooksResolver, BooksService],
  imports: [JwtModule, ActivityLogsModule],
})
export class BooksModule {}
