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
