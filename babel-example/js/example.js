'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _classCallCheck3.default)(this, Person);

    this.name = name;
    this.sex = sex;
  }

  (0, _createClass3.default)(Person, [{
    key: 'hello',
    value: function hello() {
      return 'Hello, my name is ' + this.name;
    }
  }]);
  return Person;
}();

console.log(new Person('Taro', 'M').hello());