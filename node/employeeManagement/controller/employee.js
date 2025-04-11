const Employees = require('../models/employee');





const getAllEmployees = async(req, res) => {
    const employees = await Employees.find();
    res.send(employees);

}

const createEmployee = (req, res) => {

    if(req.body.salary < 0){
        return res.status(400).send('Salary cannot be negative');
    }
    try{
        const employees = new Employees({
            name : req.body.name,
            position : req.body.position,
            department : req.body.department,
            salary : req.body.salary
        })
        employees.save()
        res.send('Employees Created');
    }
    catch(err){
        console.log(err);
    }
}

const updateEmployee = async(req, res) => {
    
    try{
        const isEmployeeExists = await Employees.findById(req.params.id);
        if(!isEmployeeExists){
            return res.status(404).send('Employee not found');
        }
        await Employees.findByIdAndUpdate(req.params.id, {
            name : req.body.name,
            position : req.body.position,
            department : req.body.department,
            salary : req.body.salary
        })
    }
    catch(err) {
        console.log(err);
    }
    res.send('Employees Updated');
}


const deleteEmployee = async(req, res) => {
    try{
        const isEmployeeExists = await Employees.findById(req.params.id);
        if(!isEmployeeExists){
            return res.status(404).send('Employee not found');
        }
        await Employees.findByIdAndDelete(req.params.id);
    }
    catch(err) {
        console.log(err);
    }
    res.send({message : 'Employees Deleted'}). status(200);
}



module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}