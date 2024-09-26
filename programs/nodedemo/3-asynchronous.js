const fs = require('fs');
console.log("begin")

data = fs.readFileSync('data1.txt')
console.log("sync data ::",data)

fs.readFile('data.txt', 'utf8', (err, data) => {
    console.log("async data")
    if (err) throw err;
    console.log(data);
}   );

console.log("end")