
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AuthCreateInput {
    email: string;
    passwordHash: string;
}

export class AuthLoginInput {
    email: string;
    password: string;
}

export class CreateBookInput {
    author: string;
    title: string;
    publicationYear: number;
}

export class UpdateBookInput {
    author?: Nullable<string>;
    title?: Nullable<string>;
    publicationYear?: Nullable<number>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class SearchBookInput {
    author?: Nullable<string>;
    title?: Nullable<string>;
    publicationYear?: Nullable<number>;
}

export class CreateUserInput {
    email: string;
    passwordHash: string;
}

export class UpdateUserInput {
    email?: Nullable<string>;
    passwordHash?: Nullable<string>;
    roles: Nullable<string>[];
}

export abstract class IMutation {
    abstract logActivity(userId: number, activity: string): Nullable<string> | Promise<Nullable<string>>;

    abstract register(authCreateInput: AuthCreateInput): Auth | Promise<Auth>;

    abstract login(authLoginInput: AuthCreateInput): AuthResponse | Promise<AuthResponse>;

    abstract createBook(createBookInput: CreateBookInput): Book | Promise<Book>;

    abstract updateBook(id: number, updateBookInput: UpdateBookInput): Book | Promise<Book>;

    abstract removeBook(id: number): Nullable<Book> | Promise<Nullable<Book>>;

    abstract addReview(bookId: number, content: string, rating: number): Nullable<string> | Promise<Nullable<string>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: number, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Auth {
    id: number;
    email: string;
    roles: Nullable<string>[];
}

export class AuthResponse {
    id: number;
    email: string;
    token: string;
    roles: Nullable<string>[];
}

export abstract class IQuery {
    abstract auth(id: number): Nullable<Auth> | Promise<Nullable<Auth>>;

    abstract profile(): Nullable<Auth> | Promise<Nullable<Auth>>;

    abstract books(search?: Nullable<SearchBookInput>, orderBy?: Nullable<OrderByParams>, skip?: Nullable<number>, take?: Nullable<number>): Nullable<Book>[] | Promise<Nullable<Book>[]>;

    abstract book(id: number): Nullable<Book> | Promise<Nullable<Book>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Book {
    id: number;
    author: string;
    title: string;
    publicationYear: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    reviews?: Nullable<Nullable<Review>[]>;
}

export class Review {
    reviewId: string;
    content: string;
    rating: number;
}

export class User {
    id: number;
    email: string;
    passwordHash: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    roles: Nullable<string>[];
}

export type DateTime = any;
type Nullable<T> = T | null;
