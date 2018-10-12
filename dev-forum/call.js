// Call explaination
// CALL the function and replace certain elements of ~this~

const mathLib = {
    pi: 3.14,
    x: 5,
    circleArea: function(r) {
        return this.pi * r * r * this.x;
    },
    cylinderArea: function(r, h) {
        return this.pi * r * r * h;
    }
};

const radius = 2;
const height = 5;

console.log('\n****** Functions As Is ******');
console.log('Area of circle:   ', mathLib.circleArea(radius));
console.log('Area of cylinder: ', mathLib.cylinderArea(radius, height));

console.log('\n****** Functions with call() ******');
console.log('Area of circle:   ', mathLib.circleArea.call({pi: 3.1415926, x: 4}, radius));
// console.log('Area of cylinder: ', mathLib.cylinderArea.call({pi: 3.1415926}, radius, height));
