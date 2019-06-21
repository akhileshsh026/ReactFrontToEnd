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

// subclasses
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `${this.name} owns the balance of ${this.balance}`;
  }
}

let customer1 = new Customer("Akhilesh", 23, 23456567);

console.log(customer1);
