/*
Json : Javascript Object Notation

1. format for storing and transporting data
2. it is often used when data is sent from a server to a webpage
*/
const fs = require("fs");
const bioData = {
  name: "Rishabh",
  age: 21,
};
console.log(bioData.name);

//1. convert to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// console.log(jsonData.name);

//json to js object
console.log(JSON.parse(jsonData));

//-----------------------------------------------------------------------------
//2. write json data to file
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("write file done");
});

//3. read the json data
fs.readFile("json1.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Json format ===> ${data}`);
    const orgData = JSON.parse(data);
    console.log(`Js Obj ===> ${orgData}`);
  }
});
