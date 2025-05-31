const numbers = arraysFromRange(-20 ,4);
console.log(numbers);


function arraysFromRange(min, max){
    const output = [];
    for (let i = min; i<=max; i++)
        output.push(i);
    return output;
}