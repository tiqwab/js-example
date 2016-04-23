// New function syntax in es6
const factorial = (x) => {
  if (x == 0) {
    return 1;
  }
  return x * factorial(x-1);
};
document.write(factorial(5));
document.write('<br>');

// A function 'reduce' does not exists in es5
const addAll = (...args) => {
  return args.reduce((a, b) => a + b);
};
document.write(addAll(1, 2, 3, 4, 5));
document.write('<br>');

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
document.write(new Person('Taro', 'M').hello());
