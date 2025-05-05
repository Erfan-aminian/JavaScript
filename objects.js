//50
const circle = {
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
//circle.draw()
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
console.log(circle1)