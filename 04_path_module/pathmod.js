const path = require('path');

console.log(path.dirname('D:/Mern/Nodejs Tut/04_path_module/pathmod.js'));

// extension of file
console.log(path.extname('D:/Mern/Nodejs Tut/04_path_module/pathmod.js'));

//full name of file
console.log(path.basename('D:/Mern/Nodejs Tut/04_path_module/pathmod.js'));

// returns an object with significant elements of path
const mypath = path.parse('D:/Mern/Nodejs Tut/04_path_module/pathmod.js');
console.log(mypath);
console.log(`name = ${mypath.name}`);