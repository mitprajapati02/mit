const fs = require('fs');

// Q3 : Ans . 
// ans 3.1 
fs.writeFile('fileSystem/message.txt', '',(err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File Created Successfully');
})

// ans 3.2

fs.appendFile('fileSystem/message.txt', 'Hello, this is a sample text written using Node.js!', 
    (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('File Updated Successfully');
    }  )

// ans 3.3 

fs.readFile('fileSystem/message.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File data: ')
    // ans 3.4
    console.log(data);
})

