// arrow function
const sayHello = name => console.log(`Hello ${name} \n`);
sayHello("Akhilesh");

// foreach
const fruits = ["Apples", "Oranges", "Grapes"];
const result = fruits.map(element => {
  element.slice(0, -1);
});
console.log(result);

// Filter

const people = [
  { id: 1, name: "Akhilesh" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "Sahu" },
  { id: 4, name: "Akhi" }
];

const filterResult = people.filter(element => {
  if (element.id != 2) {
    console.log(element.name);
  } else {
    console.log(" ");
  }
});
