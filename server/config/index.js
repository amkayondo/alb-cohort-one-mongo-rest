import Mongoose from 'mongoose'

const dburl = 'mongodb://localhost:27017/esibuuko';

Mongoose.connect(dburl, {useNewUrlParser:true, useUnifiedTopology:true, createIndexes: true})

const db = Mongoose.connection;

export default db;
