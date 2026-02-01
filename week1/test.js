function sum(a, b) {
  let ans = a + b;
  return ans;
}

res = sum("hello", "hi");
console.log(res);


function canVote(a) {
  return canVote = (a > 18);
}

ans = canVote(7);
console.log(ans);

let user = {
  name : "rashi",
  age : 20,
  gender : "female"
}



function greet(user) {
  let prefix;
  let vote;
  if (user.gender == "male") {
    prefix = "Mr.";
  } else if (user.gender == "female") {
    prefix = "Ms.";
  } else {
    prefix = "Others";
  }
  if (user.age >= 18) {
    vote = "can vote";
  } else {
    vote = "cannot vote";
  }
  console.log("Hello, " + prefix + user.name + " , " + user.age + " ," + " you " +  vote);
}

greet(user);