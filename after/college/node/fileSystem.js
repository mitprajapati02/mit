const fs = require('fs');

fs.writeFileSync('example.txt', 'hello world');
console.log('file created through write-sync'); // 1

fs.writeFile('async.txt', 'hello world', (err)=>{
    if(err){console.log(err)}
    console.log('file created through write-async');
})

const data = fs.readFileSync('example.txt', 'utf-8')
console.log(data); // 2
console.log('file read through read-sync');

fs.readFile('async.txt', 'utf-8', (err, data) => {
    if(err){console.log(err)}
    console.log(data);
    console.log('file read through read-async');
})


fs.appendFileSync('example.txt', 'hello world')
console.log('file appended through append-sync'); //

fs.appendFile('async.txt', 'hello world', (err) => {
    if(err){console.log(err)}
    console.log('file appended through append-async');
})


fs.unlinkSync('example.txt')
fs.unlink('async.txt', (err) => {
    if(err){console.log(err)}
    console.log('file deleted through unlink-async');
}
)
