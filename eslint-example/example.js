const array1 = [1, 2, 3];
const reduced = array1.reduce((memo, item) => memo + item);
console.log(`This is the reduced value: ${reduced}`);

const func1 = (item) => {
  console.log(item);
};

func1('aiueo');

class Person {
  constructor(name = 'Unknown') {
    this.name = name;
  }
  getName() {
    return name;
  }
}

const p1 = new Person('Hanako');
console.log(p1.getName());
