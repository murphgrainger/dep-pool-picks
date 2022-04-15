const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    pool: Pool
    pools: [Pool]
  }
  
  type Pool {
    id: Int
    name: String
    tournament: String
  }`)

  module.exports = schema;