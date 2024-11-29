require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_DATABASE}_dev`,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
   "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_DATABASE}_test`,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_DATABASE}_product`,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}
