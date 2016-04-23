import "babel-polyfill";

// New function syntax in es6
const factorial = (x) => {
  if (x == 0) {
    return 1;
  }
  return x * factorial(x-1);
};
console.log(factorial(5));

// A function 'reduce' does not exists in es5
const addAll = (...args) => {
  return args.reduce((a, b) => a + b);
};
console.log(addAll(1, 2, 3, 4, 5));

// New class syntax in es6
class Person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  hello() {
    return `Hello, my name is ${this.name}`;
  }
}
console.log(new Person('Taro', 'M').hello());
