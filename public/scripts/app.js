'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreetings',
        value: function getGreetings() {
            return 'Hi. I am ' + this.name + '! ';
        }
    }, {
        key: 'getDescriotion',
        value: function getDescriotion() {
            return this.name + ' is ' + this.age + ' year(s) old. ';
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: 'getDescriotion',
        value: function getDescriotion() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescriotion', this).call(this);

            if (this.hasMajor()) {
                description = description + (' Their major is ' + this.major + '.  ');
            }

            return description;
        }
    }]);

    return Student;
}(Person);

var Student2 = function (_Person2) {
    _inherits(Student2, _Person2);

    function Student2(name, age, major) {
        _classCallCheck(this, Student2);

        var _this2 = _possibleConstructorReturn(this, (Student2.__proto__ || Object.getPrototypeOf(Student2)).call(this, name, age));

        _this2.major = major;
        return _this2;
    }

    _createClass(Student2, [{
        key: 'getDescriotion',
        value: function getDescriotion() {
            var description = _get(Student2.prototype.__proto__ || Object.getPrototypeOf(Student2.prototype), 'getDescriotion', this).call(this);

            if (this.major) {
                description = description + (' Their major is ' + this.major + '.  ');
            }

            return description;
        }
    }]);

    return Student2;
}(Person);

var Traveller = function (_Person3) {
    _inherits(Traveller, _Person3);

    function Traveller(name, age, homeLocation) {
        _classCallCheck(this, Traveller);

        var _this3 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

        _this3.homeLocation = homeLocation;
        return _this3;
    }

    _createClass(Traveller, [{
        key: 'getGreetings',
        value: function getGreetings() {
            var greetings = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreetings', this).call(this);

            if (this.homeLocation) {
                greetings = greetings + (' I am visiting from ' + this.homeLocation + '.');
            }

            return greetings;
        }
    }]);

    return Traveller;
}(Person);

var me = new Student2('Lauri', 51, null);
// const me = new Student('Lauri', 51, 'Computer Science');
console.log(me.getDescriotion());

/*
const me = new Traveller('Lauri', 51, 'Lohja');
console.log(me.getGreetings());


// const other = new Traveller();
const other = new Traveller('undefined','undefined','Nowhere');
console.log(other.getGreetings());
*/
