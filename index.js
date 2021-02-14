const resolvers = require("./graphql/resolver.js");
const port = process.env.port || 4000;

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

app.get('/', (req, res) => {
  res.send('success');
});

app.listen({ port }, (error) =>{
if(error) throw error;
  console.log('Server is ready on ' + port);
}
);