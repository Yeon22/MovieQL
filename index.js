const resolvers = require("./graphql/resolver.js");

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const server = new ApolloServer({ typeDefs: `
type Movie {
  id: Int!
  title: String!
  rating: Float!
  summary: String!
  language: String!
  medium_cover_image: String!
}

type Query {
  movies(limit: Int, rating: Float): [Movie]!
  movie(id: Int!): Movie!
  suggestion(id: Int!): [Movie]!
}
`, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);