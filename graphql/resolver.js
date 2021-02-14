const {getMovies, getMovie, getSuggestions} = require('./db.js');

const resolvers = {
  Query: {
    movies: (_, {limit, rating}) => getMovies(limit, rating),
    movie: (_, {id}) => getMovie(id),
    suggestion: (_, {id}) => getSuggestions(id),
  },
}

module.exports = resolvers;