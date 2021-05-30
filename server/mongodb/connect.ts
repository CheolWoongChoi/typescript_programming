import MongoClient from 'mongodb';

export const connect = (mongoUrl = 'mongodb://localhost:27017') =>
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
