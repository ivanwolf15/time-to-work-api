const path = require('path');
const env = process.env.NODE_ENV || 'development';

const connection = {
  default: {
    host: '127.0.0.1',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  development: {
    database: 'ttw-dev',
  },
  test: {
    database: 'ttw-test',
  },
};

module.exports = {
  client: 'pg',
  connection: Object.assign({}, connection.default, connection[env])
};

