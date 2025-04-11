const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3001/company')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const db = mongoose.connection;
exports = db;
