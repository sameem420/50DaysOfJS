function toWeirdCase(string) {
  let newStr = [];
  // Your code goes here
  for (let i = 0; i < string.length; i++) {
    newStr.push(
      i % 2 === 0 ? string[i].toUpperCase() : string[i].toLowerCase()
    );
  }
  return newStr.join("");
}

//   if(i%2 === 0) {
//       newStr.push(string[i].toUpperCase())
//   }
//   else {
//       newStr.push(string[i].toLowerCase())
//   }

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
