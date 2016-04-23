'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// New function syntax in es6
var factorial = function factorial(x) {
  if (x == 0) {
    return 1;
  }
  return x * factorial(x - 1);
};
console.log(factorial(5));

// A function 'reduce' does not exists in es5
var addAll = function addAll() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  });
};
console.log(addAll(1, 2, 3, 4, 5));

// New class syntax in es6

var Person = function () {
  function Person(name, sex) {
    _classCallCheck(this, Person);

    this.name = name;
    this.sex = sex;
  }

  _createClass(Person, [{
    key: 'hello',
    value: function hello() {
      return 'Hello, my name is ' + this.name;
    }
  }]);

  return Person;
}();

console.log(new Person('Taro', 'M').hello());