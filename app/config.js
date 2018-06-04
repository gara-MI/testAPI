const config = {
  HOST: process.env.HOST||'localhost',
  PORT: 3000,
  DB_URI: process.env.MONGO_URL||'mongodb://localhost:27017'
}
module.exports = config;
