import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderByParams, SearchBookInput } from '../graphql';
import { BookUpdateInput } from '../@generated/prisma-nestjs-graphql/book/book-update.input';
import { BookCreateInput } from '../@generated/prisma-nestjs-graphql/book/book-create.input';
import { Redis } from 'ioredis';
import { ActivityLogsService } from '../activity-logs/activity-logs.service';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly activityLogsService: ActivityLogsService,
    @Inject('REDIS_CLIENT') private readonly redisClient: Redis,
  ) {}

  async create(createBookInput: BookCreateInput) {
    const createdBook = await this.prisma.book.create({
      data: createBookInput,
    });

    if (createdBook) {
      await this.activityLogsService.logActivity(
        createdBook.id,
        'Create new book',
      );
    }

    return createdBook;
  }

  async findAll(
    search?: SearchBookInput,
    orderBy?: OrderByParams,
    skip?: number,
    take?: number,
  ) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};

    const searchParams = JSON.stringify(search);
    const orderByParams = `${field}_${direction}`;
    const paginationParams = `skip_${skip || 0}_take_${take || 10}`;

    const cacheKey = `books_find_all_${searchParams}_${orderByParams}_${paginationParams}`;

    const cachedBooks = await this.redisClient.get(cacheKey);
    if (cachedBooks) {
      return JSON.parse(cachedBooks);
    }

    const books = await this.prisma.book.findMany({
      where: {
        author: search?.author
          ? { contains: search.author, mode: 'insensitive' }
          : undefined,
        title: search?.title
          ? { contains: search.title, mode: 'insensitive' }
          : undefined,
        publicationYear: search?.publicationYear
          ? search.publicationYear
          : undefined,
      },
      orderBy: { [field]: direction },
      skip: skip || 0,
      take: take || 10,
    });

    await this.redisClient.setex(cacheKey, 3600, JSON.stringify(books));

    return books;
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBookInput: BookUpdateInput) {
    return this.prisma.book.update({
      where: { id },
      data: updateBookInput,
    });
  }

  remove(id: number) {
    return this.prisma.book.delete({
      where: { id },
    });
  }
}
