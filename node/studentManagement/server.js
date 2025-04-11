const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./config/db');
const studentRoutes = require('./routes/student');
const Student = require('./models/student');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', studentRoutes);




app.listen(1234, () => {
    console.log('server is running on port 7000');
    db;
})
