import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany();

  const books = await prisma.book.createMany({
    data: [
      { author: 'George Orwell', title: '1984', publicationYear: 1949 },
      {
        author: 'J.K. Rowling',
        title: "Harry Potter and the Philosopher's Stone",
        publicationYear: 1997,
      },
      { author: 'J.R.R. Tolkien', title: 'The Hobbit', publicationYear: 1937 },
      {
        author: 'F. Scott Fitzgerald',
        title: 'The Great Gatsby',
        publicationYear: 1925,
      },
      {
        author: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        publicationYear: 1960,
      },
      {
        author: 'Jane Austen',
        title: 'Pride and Prejudice',
        publicationYear: 1813,
      },
      {
        author: 'Mark Twain',
        title: 'Adventures of Huckleberry Finn',
        publicationYear: 1884,
      },
      {
        author: 'Charles Dickens',
        title: 'A Tale of Two Cities',
        publicationYear: 1859,
      },
      { author: 'Homer', title: 'The Iliad', publicationYear: -800 },
      {
        author: 'William Shakespeare',
        title: 'Romeo and Juliet',
        publicationYear: 1597,
      },
      { author: 'Leo Tolstoy', title: 'War and Peace', publicationYear: 1869 },
      { author: 'George Orwell', title: 'Animal Farm', publicationYear: 1945 },
      {
        author: 'J.D. Salinger',
        title: 'The Catcher in the Rye',
        publicationYear: 1951,
      },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        publicationYear: 1954,
      },
      {
        author: 'Agatha Christie',
        title: 'Murder on the Orient Express',
        publicationYear: 1934,
      },
      {
        author: 'C.S. Lewis',
        title: 'The Lion, the Witch and the Wardrobe',
        publicationYear: 1950,
      },
      {
        author: 'F. Scott Fitzgerald',
        title: 'Tender Is the Night',
        publicationYear: 1934,
      },
      {
        author: 'John Steinbeck',
        title: 'The Grapes of Wrath',
        publicationYear: 1939,
      },
      {
        author: 'Harper Lee',
        title: 'Go Set a Watchman',
        publicationYear: 2015,
      },
      {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        publicationYear: 1998,
      },
      {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Prisoner of Azkaban',
        publicationYear: 1999,
      },
      {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Goblet of Fire',
        publicationYear: 2000,
      },
      {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Order of the Phoenix',
        publicationYear: 2003,
      },
      {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Half-Blood Prince',
        publicationYear: 2005,
      },
      {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Deathly Hallows',
        publicationYear: 2007,
      },
      { author: 'C.S. Lewis', title: 'Prince Caspian', publicationYear: 1951 },
      {
        author: 'C.S. Lewis',
        title: 'The Voyage of the Dawn Treader',
        publicationYear: 1952,
      },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Silmarillion',
        publicationYear: 1977,
      },
      {
        author: 'Douglas Adams',
        title: "The Hitchhiker's Guide to the Galaxy",
        publicationYear: 1979,
      },
      { author: 'Isaac Asimov', title: 'Foundation', publicationYear: 1951 },
      {
        author: 'Ray Bradbury',
        title: 'Fahrenheit 451',
        publicationYear: 1953,
      },
      {
        author: 'Margaret Atwood',
        title: "The Handmaid's Tale",
        publicationYear: 1985,
      },
      { author: 'Stephen King', title: 'The Shining', publicationYear: 1977 },
      {
        author: 'J.K. Rowling',
        title: 'Fantastic Beasts and Where to Find Them',
        publicationYear: 2001,
      },
      {
        author: 'J.K. Rowling',
        title: 'Quidditch Through the Ages',
        publicationYear: 2001,
      },
      {
        author: 'J.K. Rowling',
        title: 'The Tales of Beedle the Bard',
        publicationYear: 2008,
      },
      { author: 'Vladimir Nabokov', title: 'Lolita', publicationYear: 1955 },
      {
        author: 'Gabriel García Márquez',
        title: 'One Hundred Years of Solitude',
        publicationYear: 1967,
      },
      {
        author: 'Kurt Vonnegut',
        title: 'Slaughterhouse-Five',
        publicationYear: 1969,
      },
      {
        author: 'Ernest Hemingway',
        title: 'The Old Man and the Sea',
        publicationYear: 1952,
      },
      {
        author: 'Franz Kafka',
        title: 'The Metamorphosis',
        publicationYear: 1915,
      },
      {
        author: 'William Golding',
        title: 'Lord of the Flies',
        publicationYear: 1954,
      },
      { author: 'Leo Tolstoy', title: 'Anna Karenina', publicationYear: 1877 },
      {
        author: 'Orson Scott Card',
        title: "Ender's Game",
        publicationYear: 1985,
      },
      {
        author: 'J.D. Salinger',
        title: 'Franny and Zooey',
        publicationYear: 1961,
      },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Two Towers',
        publicationYear: 1954,
      },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Return of the King',
        publicationYear: 1955,
      },
      {
        author: 'Aldous Huxley',
        title: 'Brave New World',
        publicationYear: 1932,
      },
      {
        author: 'Dante Alighieri',
        title: 'Divine Comedy',
        publicationYear: 1320,
      },
      {
        author: 'Haruki Murakami',
        title: 'Kafka on the Shore',
        publicationYear: 2002,
      },
      {
        author: 'Mark Haddon',
        title: 'The Curious Incident of the Dog in the Night-Time',
        publicationYear: 2003,
      },
      {
        author: 'Dan Brown',
        title: 'The Da Vinci Code',
        publicationYear: 2003,
      },
      {
        author: 'George R.R. Martin',
        title: 'A Game of Thrones',
        publicationYear: 1996,
      },
      {
        author: 'Ernest Hemingway',
        title: 'For Whom the Bell Tolls',
        publicationYear: 1940,
      },
      {
        author: 'John Green',
        title: 'The Fault in Our Stars',
        publicationYear: 2012,
      },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Hobbit: An Unexpected Journey',
        publicationYear: 2012,
      },
      { author: 'Stephen King', title: 'It', publicationYear: 1986 },
      {
        author: 'Dan Brown',
        title: 'Angels and Demons',
        publicationYear: 2000,
      },
      {
        author: 'Agatha Christie',
        title: 'The Murder of Roger Ackroyd',
        publicationYear: 1926,
      },
      {
        author: 'Haruki Murakami',
        title: 'Norwegian Wood',
        publicationYear: 1987,
      },
      {
        author: 'Gabriel García Márquez',
        title: 'Love in the Time of Cholera',
        publicationYear: 1985,
      },
      { author: 'Chuck Palahniuk', title: 'Fight Club', publicationYear: 1996 },
      {
        author: 'Margaret Atwood',
        title: 'Oryx and Crake',
        publicationYear: 2003,
      },
      {
        author: 'George Orwell',
        title: 'Homage to Catalonia',
        publicationYear: 1938,
      },
      {
        author: 'George Orwell',
        title: 'Down and Out in Paris and London',
        publicationYear: 1933,
      },
      {
        author: 'J.K. Rowling',
        title: 'The Casual Vacancy',
        publicationYear: 2012,
      },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Fellowship of the Ring',
        publicationYear: 1954,
      },
      {
        author: 'John Steinbeck',
        title: 'Of Mice and Men',
        publicationYear: 1937,
      },
      {
        author: 'Jack London',
        title: 'The Call of the Wild',
        publicationYear: 1903,
      },
      {
        author: 'Margaret Atwood',
        title: 'The Blind Assassin',
        publicationYear: 2000,
      },
      { author: 'Ayn Rand', title: 'Atlas Shrugged', publicationYear: 1957 },
      { author: 'Aldous Huxley', title: 'Island', publicationYear: 1962 },
      {
        author: 'H.G. Wells',
        title: 'The War of the Worlds',
        publicationYear: 1898,
      },
      {
        author: 'Ray Bradbury',
        title: 'Something Wicked This Way Comes',
        publicationYear: 1962,
      },
      { author: 'Stephen King', title: 'The Stand', publicationYear: 1978 },
      { author: 'Isaac Asimov', title: 'I, Robot', publicationYear: 1950 },
      {
        author: 'Arthur C. Clarke',
        title: '2001: A Space Odyssey',
        publicationYear: 1968,
      },
      {
        author: 'Douglas Adams',
        title: 'So Long, and Thanks for All the Fish',
        publicationYear: 1992,
      },
      { author: 'Neal Stephenson', title: 'Snow Crash', publicationYear: 1992 },
      { author: 'David Mitchell', title: 'Cloud Atlas', publicationYear: 2004 },
      {
        author: 'Margaret Atwood',
        title: "The Handmaid's Tale",
        publicationYear: 1985,
      },
      {
        author: 'Philip K. Dick',
        title: 'Do Androids Dream of Electric Sheep?',
        publicationYear: 1968,
      },
      { author: 'Haruki Murakami', title: '1Q84', publicationYear: 2009 },
      { author: 'Herman Melville', title: 'Moby-Dick', publicationYear: 1851 },
      { author: 'Leo Tolstoy', title: 'The Cossacks', publicationYear: 1863 },
      {
        author: 'J.R.R. Tolkien',
        title: 'The Fall of Gondolin',
        publicationYear: 2018,
      },
      {
        author: 'C.S. Lewis',
        title: 'The Silver Chair',
        publicationYear: 1953,
      },
      { author: 'Kurt Vonnegut', title: "Cat's Cradle", publicationYear: 1963 },
      {
        author: 'Ken Kesey',
        title: "One Flew Over the Cuckoo's Nest",
        publicationYear: 1962,
      },
      {
        author: 'H.G. Wells',
        title: 'The Time Machine',
        publicationYear: 1895,
      },
      {
        author: 'Orson Scott Card',
        title: 'Speaker for the Dead',
        publicationYear: 1986,
      },
      {
        author: 'William Peter Blatty',
        title: 'The Exorcist',
        publicationYear: 1971,
      },
      {
        author: 'David Foster Wallace',
        title: 'Infinite Jest',
        publicationYear: 1996,
      },
      {
        author: 'Thomas Mann',
        title: 'Death in Venice',
        publicationYear: 1912,
      },
      {
        author: 'Kurt Vonnegut',
        title: 'Breakfast of Champions',
        publicationYear: 1973,
      },
      {
        author: 'Oscar Wilde',
        title: 'The Picture of Dorian Gray',
        publicationYear: 1890,
      },
      {
        author: 'Virginia Woolf',
        title: 'Mrs Dalloway',
        publicationYear: 1925,
      },
      {
        author: 'Zora Neale Hurston',
        title: 'Their Eyes Were Watching God',
        publicationYear: 1937,
      },
      {
        author: 'James Baldwin',
        title: 'Go Tell It on the Mountain',
        publicationYear: 1953,
      },
      {
        author: 'Alice Walker',
        title: 'The Color Purple',
        publicationYear: 1982,
      },
      { author: 'Willa Cather', title: 'My Ántonia', publicationYear: 1918 },
      { author: 'Toni Morrison', title: 'Beloved', publicationYear: 1987 },
      {
        author: 'Marcel Proust',
        title: 'In Search of Lost Time',
        publicationYear: 1913,
      },
      {
        author: 'Tennessee Williams',
        title: 'A Streetcar Named Desire',
        publicationYear: 1947,
      },
      { author: 'Daphne du Maurier', title: 'Rebecca', publicationYear: 1938 },
      {
        author: 'Ernest Hemingway',
        title: 'The Sun Also Rises',
        publicationYear: 1926,
      },
      {
        author: 'Charles Dickens',
        title: 'David Copperfield',
        publicationYear: 1850,
      },
    ],
  });

  console.log(`Added ${books.count} books.`);

  const roles = await prisma.role.createMany({
    data: [{ name: 'USER' }, { name: 'ADMIN' }],
  });

  console.log(`Added ${roles.count} roles.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
