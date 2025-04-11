
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name : String, 
    position : String,
    department : String, 
    salary : Number,
})


const Employees = mongoose.model('Employees', employeeSchema);

module.exports = Employees;
