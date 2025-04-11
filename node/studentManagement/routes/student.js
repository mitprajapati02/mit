const express = require('express');

const router = express.Router();


const {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controller/student');


router.get('/students', getAllStudents);

router.post('/students', createStudent);

router.put('/students/:id', updateStudent);

router.delete('/students/:id', deleteStudent);

module.exports = router;