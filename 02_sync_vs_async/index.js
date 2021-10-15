const fs = require("fs");

fs.writeFileSync('read.txt', "Welcome Rishabh");


// sync
// const data = fs.readFileSync("read.txt", 'utf-8');
// console.log(data);



// async
const data = fs.readFile("read.txt", 'utf-8', (err, data) => {
    console.log(data);
});
console.log("after the data");