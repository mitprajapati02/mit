const express = require('express');

const cors = require('cors');
const db = require('./config/db');
const employeeRoutes = require('./routes/employee');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use('/', employeeRoutes)






app.listen(1234, () => {
    console.log('server is running on port 7000');
    db;
})
