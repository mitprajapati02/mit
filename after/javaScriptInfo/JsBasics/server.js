const fs = require('fs');
const filePath = 'data.json';

// Ensure file exists
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([])); // Initialize with an empty array
}

// CREATE (Add data - Async)
function createData(newEntry) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data);
        jsonData.push(newEntry);
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) throw err;
            console.log('Data added successfully.');
        });
    });
}

// READ (Fetch data - Sync)
function readData() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('Current Data:', JSON.parse(data));
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// UPDATE (Modify data - Async)
function updateData(index, updatedEntry) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data);
        if (index >= 0 && index < jsonData.length) {
            jsonData[index] = updatedEntry;
            fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
                if (err) throw err;
                console.log('Data updated successfully.');
            });
        } else {
            console.log('Invalid index.');
        }
    });
}

// DELETE (Remove entry - Sync)
function deleteData(index) {
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        let jsonData = JSON.parse(data);
        if (index >= 0 && index < jsonData.length) {
            jsonData.splice(index, 1);
            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
            console.log('Data deleted successfully.');
        } else {
            console.log('Invalid index.');
        }
    } catch (err) {
        console.error('Error deleting data:', err);
    }
}

// Usage Examples:
createData({ name: 'Alice', age: 25 }); // Async
setTimeout(() => readData(), 1000); // Delay to allow async write
setTimeout(() => updateData(0, { name: 'Alice Smith', age: 26 }), 2000); // Async
setTimeout(() => deleteData(0), 3000); // Sync
