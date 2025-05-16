//50
const circle2525 = {
    radius : 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw : function(){
        console.log("Draw");
    }
};
//circle2525.draw()
//51 Factory Function

function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('drawwww');
        }
    };
}
const circle1 = createCircle(1);
//console.log(circle1)
// 52 Constructor Function

function Circle55(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw!');
    }
}
//const circle = new Circle55(1);

const circle3 = {
    radius: 1,
};
circle3.color = 'red';
circle3.draw = function() {}

delete circle3.color;
//console.log(circle3)

// 54 , 55 

function Circle23(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw!');
    }
}
Circle23.call({}, 1);
Circle23.apply({}, [1,2,3]);
const another2 = new Circle23(1);

//56
let obj = { value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
// 57
const circle11 = {
    radius: 1,
    draw() {
        console.log('Draw!');
    }
};

for (let key in circle11)
    console.log(key, circle11[key]);

for (let key of Object.keys(circle11))
    console.log(key);

for (let entry of Object.entries(circle11))
    console.log(entry);

if ('radius' in circle11) console.log('Yes!');

//58
const circle43 = {
    radius: 1,
    draw(){
        console.log('draw!');
    }
};

//const another = {};
//for (let key in circle43)
    //another[key] = circle43[key];

//const another = Object.assign({}, circle43);

const another = { ...circle43 };

console.log(another);
//60
