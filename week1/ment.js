const users = [{
  name : "harkirat",
  age : 20,
  gender : "male"
}, {
  name : "rashi",
  age: 21,
  gender : "female"
}, {
  name : "varun",
  age : 25,
  gender : "male"
}];

const result = users.filter(check);

function check(user) {
  return user.age > 18 && user.gender == "male";
}

console.log(result);
