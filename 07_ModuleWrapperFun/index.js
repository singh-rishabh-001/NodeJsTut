/*

*/

//module wrapper function
(function (exports, require, module, __filename, __dirname) {});

// whatever we write below will be added into this
//annonymous function or IIFE function (everythin is private inside it)

const name = "Rishabh";
console.log(name);

console.log(__filename);
console.log(__dirname);

//behind the scenes
// (function (exports, require, module, __filename, __dirname) {
//   const name = "Rishabh";
//   console.log(name);
// });
