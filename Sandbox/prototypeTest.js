// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };
//
// Person.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = 'Smith';
//
// var john = new Person('John', 1990, 'teacher');
// console.log(john.calculateAge());
//
// var jane = new Person('Jane', 1969, 'Designer');
// var mark = new Person('Mark', 1948, 'Retired');
//
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


//// Another way using prototypes
let personProto = {
    calculateAge() {
        console.log(2018 - this.yearOfBirth);
    }
};

let john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto, {
    name: {value: 'Jane', enumerable: true, writable: true},
    yearOfBirth: {value: 1969, enumerable: true, writable: true},
    job: {value: 'designer', enumerable: true, writable: true}
});

console.log(john);
console.log(jane);
john.calculateAge();
jane.calculateAge();