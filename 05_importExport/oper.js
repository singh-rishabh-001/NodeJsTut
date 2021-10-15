// by defualt all func and var are private to its own file only

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}
const mult = (a, b) => {
    return a * b;
}
const name = "Rishabh";

// we make its scope public

// 1. if we export only one
// module.exports = add;


// 2.  to export many one by one
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;

// module.exports.sub1 = sub;
// we can also write sub1, then while importing we have to use sub1

// 3. to export all at once 
module.exports = {
    add,
    sub,
    mult,
    name
};