// classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello my name is ${this.name} and my age is ${this.age} .`;
  }
}

const person1 = new Person("Akhilesh", 26);
console.log(person1.greet());
