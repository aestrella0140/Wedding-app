require('dotenv').config();

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDb connection error:'));
db.once('open', () => {
    console.log('mongoDb connected');
})

module.exports = db;
