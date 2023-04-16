// Problems
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Solution
class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    get info() {
      return `${this.name}s age is ${this.age}`;
    }
    
  }