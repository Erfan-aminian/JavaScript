const numbers2 = [3, 4];
//end
numbers2.push(5, 6);

// beginning
numbers2.unshift(1, 2);
//middle
numbers2.splice(2, 0, 'a','b')

//console.log(numbers2);
//73
const number1 = [1, 2, 3, 1, 4];

//console.log(number1.indexOf(1, 2));
//console.log(number1.indexOf(1));

//console.log(number1.indexOf(1) !== -1);
//console.log(number1.includes(1));

//74
 const courses = [
     {id:1, name: 'a'},
     {id:2, name: 'b'},

];
//const course = courses.find(function(course){
    //return course.name === 'a';
//});
const course = courses.find(course => course.name === 'a');
//console.log(course);
// 76 Delete
const numbers3  = [3, 4, 5, 6, 7];
// end
const last = numbers3.pop();
// beginning
const first = numbers3.shift();
// middle
numbers3.splice(2, 2);
console.log(numbers3);
// 77 Empty arrays
let numbers4 = [1, 2, 3, 4];
let another1 = numbers4;

//1
numbers4 = [];
//2
numbers4.length = 0;
//3
numbers4.splice(0, numbers4.length);
//4
while (numbers4.length > 0)
    numbers4.pop();

console.log(numbers4);
console.log(another1);
// 78 combined and slice
const first1 = [1, 2, 3];
const second1 = [4, 5, 6];

const combined = first1.concat(second1);

const slice = combined.slice(2,4);
console.log(combined);
console.log(slice);
//79
const first2 = [1, 2, 3];
const second2 = [4, 5, 6];

const combined2 = [...first2, 'a', ...second2, 'b'];
const copy = [...combined2];
//80 
const num = [1, 2, 3];
for (let number of num)
    console.log(number);

num.forEach((number, index) => console.log(index, num));
// 81 Join and split
const num2 = [1, 2, 3];
const joined = num2.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined3 = parts.join('-');
console.log(combined3)
//82
const courses1 = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScripts'},
];

courses1.sort(function(a, b){
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses1);
//83
const numberss = [1, -1, 2, 3];
const atLeastOnePositive = numberss.some(function(value){
    return value >= 0;
});
console.log(atLeastOnePositive);
//84
const num3 = [1, 2, -1, 3];
const filtered = num3.filter(value => value>= 0);
console.log(filtered);
//85 
const number34 = [1, 2, -1, 3];

const items = number34
   .filter(number => number >= 0)
   .map(number => ({value: number }))
   .filter(obj => obj.value > 1)
   .map(obj => obj.value);

console.log(items);
//86
const numbers12 = [1, 3, -1 , 2];

const sum = numbers12.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
console.log(sum);