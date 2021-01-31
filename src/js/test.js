class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old and she is HOT!`;
  }
}

console.log('so is Revy')

export default Person;