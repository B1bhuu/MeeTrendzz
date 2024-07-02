let operation = (a, b, char) => {
  if (char == "+") {
    return a + b;
  } else if (char == "-") {
    return a - b;
  } else if (char == "*") {
    return a * b;
  } else if (char == "/") {
    return a / b;
  } else {
    return console.log("Error");
  }
};
const add = operation(10, 15, "+");
console.log(add);
const mul = operation(2, 65, "*");
console.log(mul);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Element at index ${index}: ${number}`);
});
numbers.forEach((number, index) => {
  console.log(`The index is  ${index} :${number} `);
});
myObj = { a: 1, b: 2, c: 3, d: 4 };
for (const key in myObj) {
  console.log(`The Key is ${key} The no is ${myObj[key]}`);
  console.log(`${myObj["c"]}`);
}
