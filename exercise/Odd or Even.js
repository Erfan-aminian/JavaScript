shownumber(11);
function shownumber(number){
    for(let i=0; i<=number;i++){
        const message = (i % 2 ===0) ? "Even" : "Odd";
        console.log(i, message);
    }
}