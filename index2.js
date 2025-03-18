//30
let hour=10;
if (hour>=6 && hour<12){
    console.log('Good morning');
}
else if(hour>=12 && hour<18)
    console.log('Good aftrnoon');

else
    console.log('Good evening');
//31
let role = 'guest';
switch(role){
    case 'guest':
        console.log('guest user');
        break;
    case 'moderator':
        console.log('moderator user');
        break;
    default:
        console.log('Unknown user');
}
//32
for(let i=0; i<2; i++){
    console.log('hello world');
}
//33
let i = 0;
while (i<=5){
    if(i % 2 !== 0) console.log(i);
    i++;
}
//34
let z =9;
do {
    if(z % 2 !== 0) console.log(z);
    z++;  
} while(z<=5);
//35
//while(true){
//}
//36
const person = {
    name : 'mosh',
    age : 30
};
for (let key in person){
    console.log(key, person[key]);
}
const colors= ['red', 'green', 'nlue'];
for(let index in colors)
    console.log(index, colors[index])
//37
for(let color of colors)
    console.log(color)
//38
let q=0;
while(q<=10){
    if (q===5) break;
    if (q % 2 === 0){
        q++;
        continue;
    }
    console.log(q);
    q++;
}