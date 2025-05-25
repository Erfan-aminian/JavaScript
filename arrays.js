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

  