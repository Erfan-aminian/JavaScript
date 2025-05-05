showPrimes(20)

function showPrimes(limit){
    let i = 0;
    for (let number = 2; number <= limit; number++){
        if (isPrime(number)){
            i += 1;
            console.log(i+' : '+ number);
        }
    }
}        
    


function isPrime(number){
    for(let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}