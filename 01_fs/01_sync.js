const fs = require('fs');

// creating a new file
fs.writeFileSync('read.txt', "Welcome Rishabh");

// overrides
fs.writeFileSync('read.txt', "Welcome Rishabh Singh");

// append
fs.appendFileSync('read.txt', "\nhow are you i am fine thank you");

// additional data type called buffer (not available in brower's javascript)
// buffer is mainly used to store binary data
// while reading from a file or recieving packets from network
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);

// to rename a file
fs.renameSync("read.txt", "readwrite.txt");

// delete the file
// fs.unlinkSync("readwrite.txt")
