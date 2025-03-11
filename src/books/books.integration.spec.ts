import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { PrismaService } from '../../prisma/prisma.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PrismaClient } from '@prisma/client';
import { AppModule } from '../app.module';

jest.mock('../auth/guards/jwt-auth.guard', () => ({
  JwtAuthGuard: jest.fn(() => ({
    canActivate: jest.fn().mockResolvedValue(true),
  })),
}));

jest.mock('../common/guards/user-role.guard', () => ({
  UserRoleGuard: jest.fn(() => ({
    canActivate: jest.fn().mockResolvedValue(true),
  })),
}));

jest.mock('../common/guards/admin-role.guard', () => ({
  AdminRoleGuard: jest.fn(() => ({
    canActivate: jest.fn().mockResolvedValue(true),
  })),
}));

describe('BooksResolver (integration)', () => {
  let app: INestApplication;
  let booksService: BooksService;
  let prisma: PrismaClient;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    booksService = module.get<BooksService>(BooksService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('createBook', () => {
    it('should create a new book and store it in the database', async () => {
      const createBookInput = {
        title: 'Test Book',
        author: 'Test Author',
        publicationYear: 2023,
      };

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `mutation {
        createBook(createBookInput: { title: "Test Book", author: "Test Author", publicationYear: 2023 }) {
          id
          title
          author
          publicationYear
        }
      }`,
        })
        .expect(200);

      expect(response.body.data.createBook).toMatchObject({
        title: 'Test Book',
        author: 'Test Author',
        publicationYear: 2023,
      });

      const createdBook = await prisma.book.findUnique({
        where: { id: response.body.data.createBook.id },
      });
      expect(createdBook).toMatchObject(createBookInput);
    });
  });

  describe('findAll', () => {
    it('should return a list of books', async () => {
      await prisma.book.createMany({
        data: [
          { title: 'Book 1', author: 'Author 1', publicationYear: 2022 },
          { title: 'Book 2', author: 'Author 2', publicationYear: 2021 },
        ],
      });

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `query {
            books {
              id
              title
              author
              publicationYear
            }
          }`,
        })
        .expect(200);

      expect(response.body.data.books.length).toBeGreaterThanOrEqual(2);
      expect(response.body.data.books[0]).toHaveProperty('id');
      expect(response.body.data.books[0]).toHaveProperty('title');
    });
  });

  describe('findOne', () => {
    it('should return a single book by id', async () => {
      const createdBook = await prisma.book.create({
        data: {
          title: 'Unique Book',
          author: 'Unique Author',
          publicationYear: 2023,
        },
      });

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `query {
            book(id: ${createdBook.id}) {
              id
              title
              author
              publicationYear
            }
          }`,
        })
        .expect(200);

      expect(response.body.data.book).toMatchObject({
        id: createdBook.id,
        title: 'Unique Book',
        author: 'Unique Author',
        publicationYear: 2023,
      });
    });
  });

  describe('updateBook', () => {
    it('should update a book and return the updated book', async () => {
      const createdBook = await prisma.book.create({
        data: {
          title: 'Book to Update',
          author: 'Author to Update',
          publicationYear: 2022,
        },
      });

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `mutation {
            updateBook(id: ${createdBook.id}, updateBookInput: { title: "Updated Book Title" }) {
              id
              title
              author
              publicationYear
            }
          }`,
        })
        .expect(200);

      expect(response.body.data.updateBook).toMatchObject({
        id: createdBook.id,
        title: 'Updated Book Title',
        author: 'Author to Update',
        publicationYear: 2022,
      });
    });
  });

  describe('removeBook', () => {
    it('should remove a book from the database', async () => {
      const createdBook = await prisma.book.create({
        data: {
          title: 'Book to Remove',
          author: 'Author to Remove',
          publicationYear: 2023,
        },
      });

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `mutation {
            removeBook(id: ${createdBook.id}) {
              id
            }
          }`,
        })
        .expect(200);

      expect(response.body.data.removeBook.id).toBe(createdBook.id);

      const deletedBook = await prisma.book.findUnique({
        where: { id: createdBook.id },
      });
      expect(deletedBook).toBeNull();
    });
  });
});
