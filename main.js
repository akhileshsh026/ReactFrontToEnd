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
    console.log("");
  }
});

//Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4];
console.log(arr2);

let person1 = {
  name: "Akhilesh",
  age: 27
};

let person2 = {
  ...person1,
  email: "Akhileshsh026@hotmail.com"
};

console.log(person2);

//Destructuring

let profile = {
  name: "Akhilesh Kumar",
  address: {
    street: "New Market",
    pin_code: 481661
  },
  hobbies: ["Movies,cricket"]
};

const { name } = profile;
const { street } = profile.address;

console.log(name, street);
