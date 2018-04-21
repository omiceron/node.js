const fs = require('fs');

console.log('start');

fs.readFile(__filename, (err, content) => {
  console.log('read file');
});

setImmediate(() => {
  console.log('immediate');
});

new Promise(resolve => {
  console.log('promise create');
  resolve('promise then');
}).then(value => console.log(value));

process.nextTick(() => {
  console.log('nextTick');
});

while(true) {}

console.log('end');

// v8 + libuv
