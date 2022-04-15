require('dotenv').config();
const path = require("path");

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_DB_URL,
    migrations: {
      directory: path.join(__dirname, './server/db/migrations')
    }
  },

  test: {
    client: 'pg',
    connection: process.env.TEST_DB_URL,
    pool: { min: 1, max: 1 }
  },

  staging: {
    client: 'pg',
    connection: process.env.STAGING_DB_URL + '?ssl=true'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
