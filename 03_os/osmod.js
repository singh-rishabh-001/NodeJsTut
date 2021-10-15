// OS Module

const os = require('os');

// os architecture
console.log(os.arch());

const freeMemory = os.freemem();

console.log(`free memory = ${freeMemory} bytes ,, ${freeMemory/1024/1024/1024} Gb`);

const totalMemory = os.totalmem();
console.log(`total mem = ${totalMemory/1024/1024/1024} GB`)

console.log(os.hostname());

console.log(os.platform());

console.log(os.tmpdir());
console.log(os.type());