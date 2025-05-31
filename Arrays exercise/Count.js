const numbers = [1, 2, 3, 4, 1, 1, 1];

const count = countOccurrences(numbers, 1)

console.log(count);

function countOccurrences(array, searchElement){
    return array.reduce((accmulator, current) => {
        const occurrences = (current === searchElement)
        console.log(accmulator, current, searchElement);
        return accmulator + occurrences ;
    }, 0);
}