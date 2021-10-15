const fs = require("fs");

// fs.writeFile("asynctext.txt", "Today is a good day",
//     (err) => {
//         console.log(`file is created`);
//         console.log(err);
//     });

// fs.appendFile("asynctext.txt", "\nSo let's enjoy the day.", (err) => {
//     console.log("data append completed");
// });

// fs.readFile("asynctext.txt", 'utf-8', (err, data) => {
//     console.log(`err = ${err}`);
//     console.log(`data = ${data}`);
// });

// fs.rename("asynctext.txt", "async.txt", (err) => {
//     console.log("rename done");
// });

fs.unlink("async.txt", (err) => {
    console.log("file deleted");
})