const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');




const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/notes')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String
})

const User = mongoose.model('User', userSchema);


app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

app.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password
    })
    await user.save();

    res.json(user);
})

app.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
})

app.patch('/users/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.redirect('/users')
})

app.listen(3000, () => {
    console.log('server started on port 3000');
})