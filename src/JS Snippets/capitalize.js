//create functionality to capitalize each first letter of a string
//eg: "jai shree krishn"  --> "Jai Shree Krishn"

console.log("capitalize each first letter of a string: ");

const str = "jai shree krishn";

//approach with split() & map() function
let cap = str
  .split(" ")
  .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
  .join(" ");

console.log(cap);

//approach with for loop
let result = "";

for (let i = 0; i < str.length; i++) {
  if (i == 0 || str[i - 1] === " ") result += str[i].toUpperCase();
  else result += str[i];
}

console.log(result);
