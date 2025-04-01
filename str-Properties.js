const movie = {
    title : 'mr-robot',
    year : 2001,
    rating:4.5,
    creator:'esi',
}
showproperties(movie)
function showproperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key])
    }
}