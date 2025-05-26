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