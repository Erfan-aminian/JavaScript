console.log("hello world!!!");

let firsrname1 = 'mosh';
let lastname1 = 'hamedani';

let age= 30; // Number
let isapproved = true; // boolean 
let neme1 = undefined;
let laname1 = null;

// const variable
const interestRate = 0.3;
// objects
let person = {
    fname : 'erfan',
    age: 22
};
// Dot Notation
person.fname = 'jack';

// bracket notation
person['fname'] = 'mary';
// Array
let selectcolor = ['red' , 'green', 'blue'];
selectcolor[3] = 4;

function greet(fname, lname){
    console.log('hello ' + fname + ' '+ lname);
    
};
greet('erfan', 'aminian')

function square(Number){
    return Number * Number;
};
console.log(square(10));