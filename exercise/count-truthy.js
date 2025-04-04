const array = ['', undefined, 1, 2, 3, 'erfan']
console.log(counttruthy(array));
function counttruthy(array){
    let count = 0;
    for(let value of array)
        if(value)
            count++;
        return count;

}