// console.log(1 + 3);

// console.log(process.argv);

// argvs = process.argv;

// for (let i = 2; i < argvs.length; i++) {
//   console.log(` Hello ! ${argvs[i]}`);
// }

const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

let obj = {
  sum: sum,
  mult: multiply,
  a: 34,
  b: 16,
};

module.exports = obj;
