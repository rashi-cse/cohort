// function sum(a, b) {
//   return a + b;
// }

// let sem = sum(2, 3);
// console.log(sem);

const fs = require("fs");

console.log(fs);

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

// var user = {
//   age: 21,
//   name: "harkirat",
//   calculateAge: function() {
//     return 10
//   }
// }
 
// console.log(user.calculateAge());