import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import app from './app';
import { getPosts, createPost as createPostService } from './services';

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`Listening: http://localhost:${port}`);
//   /* eslint-enable no-console */
// });

const typeDefs = `
type Query {
  hello: String,
  posts: [Post!],
  getUsers: [User!],
  getUser(id: Int!): User!,
}

type Post {
  id: Int!,
  title: String!,
  description: String,
  comments: [Comment!], 
}

type User {
  id: Int!,
  name: String!,
  email: String!,
  password: String!,
  image: String,
}

type Mutation {
  createPost(title: String!, description: String): Post!
  createUser(name: String!, email: String!, password: String!): User!
}
`;

//definir el tipo de post
// definir el tipo de la query para getPOsts

const resolvers = {
  Query: {
    hello: () => 'text',
    posts: () => getPosts(),
  },
  Mutation: {
    createPost: (parent: any, args: any) => {
      const { title, description } = args;

      return createPostService({ title, description });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const createServer = async () => {
  const { url } = await startStandaloneServer(server);

  console.log(`Server ready at ${url}`);
};

createServer();
