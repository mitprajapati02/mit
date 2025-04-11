
const Student = require('../models/student');


const getAllStudents = async (req, res) => {
    const students = await Student.find();
    res.send(students);
}

const createStudent = (req, res) => {
    try{
        const student = new Student({
            name : req.body.name,
            rollno : req.body.rollno,
            class : req.body.class,
            section : req.body.section
        })
        student.save()
        res.send('Student Created');
    }
    catch(err){
        console.log(err);
    }
}

const updateStudent = async(req, res) => {
    try{
        await Student.findByIdAndUpdate(req.params.id, {
            name : req.body.name,
            rollno : req.body.rollno,
            class : req.body.class,
            section : req.body.section
        })
    }
    catch(err) {
        console.log(err);
    }
    res.send('Student Updated');
}

const deleteStudent = async(req, res) => {
    try{
        await Student.findByIdAndDelete(req.params.id);
    }
    catch(err) {
        console.log(err);
    }
    res.send({message : 'Student Deleted'}). status(200);
}



module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
}