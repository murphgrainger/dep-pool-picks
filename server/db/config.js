const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const root = require('./queries');

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  });