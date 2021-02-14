const resolvers = require("./graphql/resolver.js");
const port = process.env.PORT || 3000;

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
`, resolvers, playground: true });

const app = express();
server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.redirect('/graphql')
});

app.listen({ port }, (error) =>{
  if(error) throw error;
    console.log('Server is ready on ' + port);
  }
);