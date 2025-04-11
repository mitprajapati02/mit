1. Basic Node.js Server (Without Express)
    const http = require('http');

    const server = http.createServer((req, res) => {
        res.end('Hello, this is a basic Node.js server');
    });

    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });

2. Node.js Server Handling Different URL Paths (Without Express)
    const http = require('http');
    const server = http.createServer((req, res) => {

        if (req.url === '/') {
            res.end('<h1>Welcome to Home Page</h1>');
        } else if (req.url === '/about') {
            res.end('<h1>About Us</h1>');
        } else {
            res.writeHead(404);
            res.end('<h1>404 Page Not Found</h1>');
        }
    });
    server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
    });

3. Basic Express Syntax
    const express = require('express');
    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello from Express!');
    });
    app.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });


fs.writeFileSync('filename.extention', 'content');
.writeFile('filename','content',(err)=>{})
data = fs.readFileSync('filepath','utf-8');
fs.readFile('filepath','utf-8', (err, data) => {cl(data)})
.appendFileSync('data.txt','\n new line');
.appendFile('filepath','content',(err) => {})
.unlinkSync('filepath');
.unlink('filepath',(err)=>{})

4. CRUD Operations Using fs (With Async & Sync)

    const fs = require('fs');
    
    fs.writeFileSync('file.txt', 'Some data');  // Blocking
    console.log('This runs after the file is written');

    fs.writeFile('file.txt', 'Some data', (err) => {
    if (err) throw err;
    console.log('File writing done!');
    });

    console.log('This might run before the file is written');


    Read a File
            const data = fs.readFileSync('data.txt', 'utf-8');
        Async (Non-Blocking)
            fs.readFile('data.txt', 'utf-8', (err, data) => {
                console.log('File Content (Async):', data);
            });

    Update / Append Data to a File
            fs.appendFileSync('data.txt', '\nNew Line Added (Sync)');
        Async (Non-Blocking)
            fs.appendFile('data.txt', '\nNew Line Added (Async)', (err) => {
                console.log('Content Appended (Async)');
            });

    Delete a File
        fs.unlinkSync('data.txt');
    
        fs.unlink('data.txt', (err) => {
            console.log('File Deleted (Async)');
        });

5. CRUD with JSON File + Express APIs

    app.use(express.json());
    const filePath = 'users.json';

    // Create User
        app.post('/users', (req, res) => {
            let users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            users.push(req.body);
            fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
            res.send('User Added');
        });

    // Get Users
        app.get('/users', (req, res) => {
            const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            res.json(users);
        });

    // Update User
        app.put('/users/:id', (req, res) => {
            let users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            users[req.params.id] = req.body;
            fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
            res.send('User Updated');
        });

    // Delete User
        app.delete('/users/:id', (req, res) => {
            let users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            users.splice(req.params.id, 1); // Using slice without spread
            fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
            res.send('User Deleted');
        });


6. Display Frontend UI from Node Using map and join

    const users = ['Alice', 'Bob', 'Charlie'];

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const userList = users.map(user => `<li>${user}</li>`).join('');
        res.end(`<ul>${userList}</ul>`);
    });


7. Get Form Data with Express Middleware


    const logger = (req, res, next) => {
        console.log(`${req.method} request received at ${req.url}`);
        next();
    };

    app.use(logger);

    app.get('/', (req, res) => res.send('Welcome!'));


9. MongoDB Connection + CRUD API in One File


    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');

    const app = express();
    app.use(bodyParser.json());

    mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

    const userSchema = new mongoose.Schema({ name: String, email: String, age: Number });
    const User = mongoose.model('User', userSchema);
    

    app.post('/users', (req, res) => {
        const newUser = new User(req.body);
        newUser.save();
        res.send('User Created');
    });

    app.get('/users', (req, res) => {
        User.find({}, (err, users) => res.json(users));
    });

    app.get('/users/:id', (req, res) => {
        User.findById(req.params.id, (err, user) => res.json(user));
    });

    app.put('/users/:id', (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => res.send('User Updated'));
    });

    app.delete('/users/:id', (req, res) => {
        User.findByIdAndDelete(req.params.id, (err) => res.send('User Deleted'));
    });