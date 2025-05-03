import { data } from "./mock-data.js";

export const resolvers = {
  Book: {
    author: (parents, args, context, info) => {
      return data.authors.find((author) => author.id === parents.authorId);
    },
  },

  Author: {
    books: (parents, args, context, info) => {
      return data.books.filter((book) => book.authorId === parents.id);
    },
  },

  Query: {
    authors: (parents, args, context, info) => {
      return data.authors;
    },
    books: (parents, args, context, info) => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = {
        ...args,
        id: data.books.length + 1,
      };
      data.books.push(newBook);
      return newBook;
    },
  },
};
