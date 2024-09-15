const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/ToDoDB', { useNewUrlParser: true, useUnifiedTopology: true });

connection.on('open', () => {
    console.log('Connected to MongoDB');
});
connection.on('error', (err) => {
    console.log('Error connecting to MongoDB:', err);
});

module.exports = connection;
