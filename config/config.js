module.exports = {
  port: process.env.PORT || 4000,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/comethrough',
  secret: process.env.SECRET || 'The blistering sun scorched the earth'
};
