# GraphQL Server Practice Project

This project is a practice implementation of a GraphQL server using Apollo Server. It demonstrates the basics of setting up a GraphQL API with queries, mutations, and resolvers.

## Features

- **GraphQL Schema**: Defines types for `Author` and `Book` with relationships between them.
- **Mock Data**: Includes a set of mock data for authors and books.
- **Resolvers**: Implements resolvers for queries and mutations.
- **Standalone Server**: Runs on Apollo Server with a standalone configuration.

## Project Structure

```
graphql-server/
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
└── src/
    ├── index.ts          # Entry point of the server
    ├── mock-data.ts      # Mock data for authors and books
    ├── resolvers.ts      # Resolvers for GraphQL schema
    └── type-defs.ts      # GraphQL type definitions
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (preferred package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd graphql-server
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Server

Start the server with the following command:

```bash
pnpm start
```

The server will be available at `http://localhost:4000`.

### GraphQL Playground

You can access the GraphQL Playground at `http://localhost:4000` to test queries and mutations.

## Example Queries and Mutations

### Query: Get all authors and their books

```graphql
query {
  authors {
    id
    name
    books {
      id
      name
    }
  }
}
```

### Mutation: Add a new book

```graphql
mutation {
  addBook(name: "New Book", publishedYear: 2025, authorId: 1) {
    id
    name
    publishedYear
  }
}
```
