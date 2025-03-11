import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { PrismaService } from '../../prisma/prisma.service';
import { ActivityLogsService } from '../activity-logs/activity-logs.service';
import { Redis } from 'ioredis';
import { BookCreateInput } from '../@generated/prisma-nestjs-graphql/book/book-create.input';
import { BookUpdateInput } from '../@generated/prisma-nestjs-graphql/book/book-update.input';

describe('BooksService', () => {
  let service: BooksService;
  let prismaService: PrismaService;
  let activityLogsService: ActivityLogsService;
  let redisClient: Redis;

  const mockBookCreateInput: BookCreateInput = {
    title: 'Test Book',
    author: 'Test Author',
    publicationYear: 2023,
  };

  const mockBookUpdateInput: BookUpdateInput = {
    title: { set: 'Updated Book' },
  };

  const mockBooks = [
    { id: 1, title: 'Test Book 1', author: 'Author 1', publicationYear: 2022 },
    { id: 2, title: 'Test Book 2', author: 'Author 2', publicationYear: 2021 },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        PrismaService,
        ActivityLogsService,
        {
          provide: 'REDIS_CLIENT',
          useValue: {
            get: jest.fn(),
            setex: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
    prismaService = module.get<PrismaService>(PrismaService);
    activityLogsService = module.get<ActivityLogsService>(ActivityLogsService);
    redisClient = module.get<Redis>('REDIS_CLIENT');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new book and log activity', async () => {
      const createdBook = { ...mockBookCreateInput, id: 1 };
      prismaService.book.create = jest.fn().mockResolvedValue(createdBook);
      activityLogsService.logActivity = jest.fn().mockResolvedValue(undefined);

      const result = await service.create(mockBookCreateInput);

      expect(result).toEqual(createdBook);
      expect(prismaService.book.create).toHaveBeenCalledWith({
        data: mockBookCreateInput,
      });
      expect(activityLogsService.logActivity).toHaveBeenCalledWith(
        createdBook.id,
        'Create new book',
      );
    });
  });

  describe('findAll', () => {
    it('should return books from cache if available', async () => {
      const cacheKey = `books_find_all_{"author":"Test Author"}_createdAt_desc_skip_0_take_10`;
      redisClient.get = jest.fn().mockResolvedValue(JSON.stringify(mockBooks));

      const result = await service.findAll(
        { author: 'Test Author' },
        { field: 'createdAt', direction: 'desc' },
      );

      expect(result).toEqual(mockBooks);
      expect(redisClient.get).toHaveBeenCalledWith(cacheKey);
    });

    it('should return books from database if not in cache', async () => {
      const cacheKey = `books_find_all_{"author":"Test Author"}_createdAt_desc_skip_0_take_10`;
      redisClient.get = jest.fn().mockResolvedValue(null);
      prismaService.book.findMany = jest.fn().mockResolvedValue(mockBooks);
      redisClient.setex = jest.fn().mockResolvedValue('OK');

      const result = await service.findAll(
        { author: 'Test Author' },
        { field: 'createdAt', direction: 'desc' },
      );

      expect(result).toEqual(mockBooks);
      expect(redisClient.get).toHaveBeenCalledWith(cacheKey);
      expect(redisClient.setex).toHaveBeenCalledWith(
        cacheKey,
        3600,
        JSON.stringify(mockBooks),
      );
    });
  });

  describe('update', () => {
    it('should update an existing book', async () => {
      const updatedBook = { ...mockBooks[0], mockBookUpdateInput };
      prismaService.book.update = jest.fn().mockResolvedValue(updatedBook);

      const result = await service.update(1, mockBookUpdateInput);

      expect(result).toEqual(updatedBook);
      expect(prismaService.book.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: mockBookUpdateInput,
      });
    });
  });

  describe('remove', () => {
    it('should remove a book by id', async () => {
      const deletedBook = mockBooks[0];
      prismaService.book.delete = jest.fn().mockResolvedValue(deletedBook);

      const result = await service.remove(1);

      expect(result).toEqual(deletedBook);
      expect(prismaService.book.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
