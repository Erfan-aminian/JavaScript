function walk (){
    console.log('walk');
};

let run = function(){
    console.log('run');
};
//run(); 

function jame(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;  
}
//console.log(sum(1, 2, 3, 4, 5));

function sum1 (discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
//console.log(sum1(0.1, 20, 30));
function interest(principal, rate=3.5, year=5){
    return principal * rate / 100 * year;
}
console.log(interest(10000))
///

function jame(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;  
}
//console.log(sum(1, 2, 3, 4, 5));
function minus(){
    let total = 0;
    for (let value of arguments)
        total -= value;
    return total;  
}
//console.log(sum(1, 2, 3, 4, 5));

function sum1 (discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
//console.log(sum1(0.1, 20, 30));
function interest(principal, rate=3.5, year=5){
    return principal * rate / 100 * year;
}
console.log(interest(10000))
function sum1 (discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
//console.log(sum1(0.1, 20, 30));
function interest(principal, rate=3.5, year=5){
    return principal * rate / 100 * year;
}
console.log(interest(10000))function sum1 (discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
//console.log(sum1(0.1, 20, 30));
function interest(principal, rate=3.5, year=5){
    return principal * rate / 100 * year;
}
console.log(interest(10000))