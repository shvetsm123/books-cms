## Description

Books Content Management System (CMS) using NestJS, GraphQL, PostgreSQL, Redis, DynamoDB, and AWS. The system allows users to manage book information, handle large datasets efficiently, and ensure high availability and security.

1. System Architecture:
- The Books CMS using NestJS and GraphQL to handle data fetching and mutations efficiently.

2. Database Design:
- PostgreSQL stores relational data such as book details (title, author, publication year, etc.).
- DynamoDB uses for managing non-relational data such as user activity logs and book reviews.
- Implemented caching mechanisms with Redis to enhance data retrieval performance.
  
3. Features:
- CRUD Operations: implemented books, auth, users, reviews, activity-logs services.
- Implemented a robust search functionality for books with filters like author, title and publication year.
- Sorting and Pagination: implemented sorting by different book attributes and pagination for large result sets.
- User Authentication and Authorization: the system is secured by using JWT-based authentication and ACLs (Access Control Lists) to manage user permissions.
- Rate Limiting: Implemented rate limiting to prevent abuse of the system with GqlThrottlerGuard.

5. Scalability and Performance:
- Designed the system to handle high loads, especially focusing on efficient query design and database indexing.
- Ensure the system is scalable horizontally by designing stateless services that can be deployed in a load-balanced environment within AWS, including partitions feature for Books table.

6. Security:
- Ensure secure storage of sensitive data (password).
- Implement necessary security headers and proper handling of errors to prevent common vulnerabilities like SQL injection, XSS, etc. via Helmet module.

7. Testing:
- Wrote unit tests and integration tests covering major books functionalities.
- Documented how to run the tests.

8. Documentation:
- Provided a README file with setup and deployment instructions.
- All API endpoints and example queries and mutations are allowed on graphql playground.

## Installation

```bash
# go to desktop
$ cd desktop

# clone repository
$ git clone https://github.com/shvetsm123/books-cms.git
```

## Running the app

```bash
# install modules
$ npm i

# create and fill .env file
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=books_cms_db
POSTGRES_PORT=5432
POSTGRES_HOST=postgres

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public

JWT_SECRET=secret123
JWT_EXPIRES=30d

REDIS_HOST=redis
REDIS_PORT=6379

AWS_ACCESS_KEY_ID=AKIAT7JJUU6N4G2K7UBF
AWS_SECRET_ACCESS_KEY=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
AWS_REGION=us-east-1
AWS_DYNAMODB_TABLE=Reviews
AWS_ACTIVITY_LOGS_TABLE=ActivityLogs

# build and run docker-compose file
$ docker-compose up --build

# for macos arm - leave the "binaryTargets" in prisma/schema.prisma. For rest archs and os - delete this string.
```

## interaction with API [in app container]

```bash
# go to app container
$ docker-compose exec app /bin/sh

# add migration
$ npx prisma migrate dev

# add seed (books, roles)
$ npm run prisma:seed

# run the app
$ npm run dev

# visit graphql playground
$ http://localhost:3000/graphql

# general flow
mutattion/register
mutation/login (get token)
mutation/createBook (paste token in headers: Auhtorization - Bearer *token*)
mutation/addReview
query/book 
query/books (search, orderBy, skip, take) + redis caching

```

## Tests

```bash
# unit and integration tests
$ npm run test

# also you can run tests directly from the spec files ./src/books/*.spec.ts
```
