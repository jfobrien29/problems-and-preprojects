// BIND Explaination
// BIND the new context to a new function

const mathLib = {
    pi: 3.14,
    x: 5,
    circleArea: function(r) {
        return this.pi * r * r;
    },
    cylinderArea: function(r, h) {
        return this.pi * r * r * h * this.x;
    }
};

const radius = 2;
const height = 5;

// console.log('\n****** Functions As Is ******');
// console.log('Area of circle:   ', mathLib.circleArea(radius));
// console.log('Area of cylinder: ', mathLib.cylinderArea(radius, height));

// console.log('\n****** Functions with call() ******');
// console.log('Area of circle:   ', mathLib.circleArea.call({pi: 3.1415926}, radius));
// console.log('Area of cylinder: ', mathLib.cylinderArea.call({pi: 3.1415926}, radius, height));

// console.log('\n****** Functions with apply() ******');
// console.log('Area of circle:   ', mathLib.circleArea.apply({pi: 3.1415926}, [2]));
// console.log('Area of cylinder: ', mathLib.cylinderArea.apply({pi: 3.1415926}, [2, 5]));


// console.log('\n****** Function with bind() ******');
// const newPiCylinderArea = mathLib.cylinderArea.bind({pi: 3.1415926});
// console.log('Area of cylinder: ', newPiCylinderArea(2, 5));

let a = '100'
console.log(parseInt(a));
