// arrow function
const sayHello = name => console.log(`Hello ${name} \n`);
sayHello("Akhilesh");

// foreach
const fruits = ["Apples", "Oranges", "Grapes"];
const result = fruits.map(element => {
  element.slice(0, -1);
});
console.log(result);
