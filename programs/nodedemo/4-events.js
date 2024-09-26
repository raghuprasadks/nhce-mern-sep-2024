const fs = require('fs');
console.log("begin");
// Asynchronous read using streams
const readStream = fs.createReadStream('data.txt', 'utf8');
let dataAsync = '';
readStream.on('data', (chunk) => {
    console.log("async data chunk received");
    dataAsync += chunk;
});

readStream.on('end', () => {
    console.log("async data ::", dataAsync);
});

readStream.on('error', (err) => {
    console.error("Error reading file:", err);
});

console.log("end");