const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema({
    name : String, 
    rollno : String,
    class : String, 
    section : String,
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;