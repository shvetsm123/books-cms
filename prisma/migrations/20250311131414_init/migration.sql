-- CreateTable
CREATE TABLE "books"
(
    "id"               SERIAL       NOT NULL,
    "author"           TEXT         NOT NULL,
    "title"            TEXT         NOT NULL,
    "publication_year" INTEGER      NOT NULL,
    "created_at"       TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at"       TIMESTAMP(3) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
) PARTITION BY RANGE ("id");

CREATE TABLE "books_1" PARTITION OF "books"
    FOR VALUES FROM (1) TO (101);

CREATE TABLE "books_2" PARTITION OF "books"
    FOR VALUES FROM (101) TO (201);

CREATE TABLE "books_3" PARTITION OF "books"
    FOR VALUES FROM (201) TO (301);

CREATE SEQUENCE books_1_id_seq START 102;
CREATE SEQUENCE books_2_id_seq START 202;
CREATE SEQUENCE books_3_id_seq START 302;

ALTER TABLE "books_1"
    ALTER COLUMN "id" SET DEFAULT nextval('books_1_id_seq');
ALTER TABLE "books_2"
    ALTER COLUMN "id" SET DEFAULT nextval('books_2_id_seq');
ALTER TABLE "books_3"
    ALTER COLUMN "id" SET DEFAULT nextval('books_3_id_seq');

-- CreateTable
CREATE TABLE "users"
(
    "id"            SERIAL       NOT NULL,
    "email"         TEXT         NOT NULL,
    "password_hash" TEXT         NOT NULL,
    "created_at"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at"    TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_books"
(
    "user_id"    INTEGER      NOT NULL,
    "book_id"    INTEGER      NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_books_pkey" PRIMARY KEY ("user_id", "book_id")
);

-- CreateTable
CREATE TABLE "roles"
(
    "id"   SERIAL NOT NULL,
    "name" TEXT   NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles"
(
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("userId", "roleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles" ("name");

-- AddForeignKey
ALTER TABLE "user_books"
    ADD CONSTRAINT "user_books_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_books"
    ADD CONSTRAINT "user_books_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles"
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles"
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
