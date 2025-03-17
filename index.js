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
// 23
let point = 99;
let type = point > 100 ? "gold" : "silver";
console.log(type)
// 24
// logical and &&
// logical or ||
// not !
let highincome = false;
let goodcreditscore = true;
let eligibleforloan = highincome || goodcreditscore;
console.log('eligible',eligibleforloan);
let applicationrefused = !eligibleforloan
console.log('application ',applicationrefused);
// 25
// falsy (false)
// undefind
// null
//0
//false
//''
//NaN
let usercolor = undefined;
let defaultcolor = 'blue';
let currentcolor = usercolor || defaultcolor;
console.log(currentcolor);
//26
const readpermission = 4;
const writepermission = 2;
const excutepermisson = 1;
let mypermission = 0;

mypermission =  mypermission |writepermission;
let message = (mypermission & readpermission) ? 'yes': 'no';
console.log(message);
//27
let xx = (2 +3) * 4;
console.log(xx);
//29
let a = 'red';
let b = 'blue';

let c =a;
a = b;
b = c;
console.log(a);
console.log(b);