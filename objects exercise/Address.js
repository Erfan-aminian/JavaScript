let address = {
    street : 'biglo',
    city : 'Tehran',
    zipcode : '7'
};

function showAddress(address){
    for( let key in address)
        console.log(key, address[key]);
}
showAddress(address);