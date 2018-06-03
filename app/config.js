const config = {
  HOST: process.env.HOST||'localhost',
  PORT: process.env.PORT||8090,
  DB_URI: process.env.MONGO_URL||'mongodb://localhost:27017'
}
module.exports = config;
