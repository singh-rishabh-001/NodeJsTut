const oper = require('./oper')

// object contains all exports
console.log(oper);
console.log(oper.add(5, 5));
console.log(oper.sub(10, 5));
console.log(oper.name)

// 2. Using object destructuring

const {
    add,
    sub,
    mult,
    name
} = require('./oper')


console.log(add(5, 5));
console.log(sub(10, 5));
console.log(mult(10, 5));
console.log(name)