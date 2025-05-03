export const typeDefs = `#graphql

 type Author {
    id: ID!
    name: String!
    books: [Book]
    }

  type Book {
    id: ID!
    name: String!
    publishedYear: Int
    author: Author
   
  }

  type Query {
    authors: [Author]
    books: [Book]
  }

  type Mutation {
    addBook (name: String!, publishedYear: Int, authorId: ID!): Book!
  }

`;