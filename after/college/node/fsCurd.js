const fs = require('fs');
const users = require('./user.json');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const data = fs.readFileSync('./user.json', 'utf-8')
console.log(data);
console.log(users);
const user = JSON.parse(data);
console.log(user);

// const newUser = {
//     name : 'mit', 
//     city : 'ahmedabad'
// }

// users.push(newUser);

// fs.writeFile('./user.json', JSON.stringify(users), (err) => {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log('file written successfully');
// })

const updatedUsers = users.filter((user) => user.name !== 'mit');
const giveUsers = updatedUsers.map ((user) => `<li>${user.name}</li>`).join('')

fs.writeFile('./user.json', JSON.stringify(updatedUsers), (err) => {
    if(err) {
        console.log(err) ;
        return
    }
    console.log('file updated successfully');
})

app.get('/', (req, res) => {
    res.send(giveUsers)
})


app.listen(3033, () => {
    console.log('server is running on port 3033');
}
)