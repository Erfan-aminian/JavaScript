//let address = new Address('a','b','c');
let address = createAddress('a','b','c');
console.log(address)

function createAddress(street, city, zipcode){
    return{
        street,
        city,
        zipcode
    };
}

function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}