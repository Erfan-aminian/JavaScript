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


//console.log(square(10));

// 19

let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Increment
console.log(x++);
console.log(x);

//Decrement
console.log(--x);
// 20
let z = 10;

z = z + 5;
z += 5;

z = z * 3;
z *= 3;

// 21 Relational
let p = 1;
console.log(x >= 0);
console.log(x <= 0);

console.log(x === 1);
console.log(x !== 1);
// 22
//Strict Equakity (type + value)
console.log(1===1);
console.log('1'===1);

//lose Equality(value)
console.log(1==1);
console.log('1'==1);
console.log(true==1);
