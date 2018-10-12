// Set the tone

const mathLib = {
    pi: 3.14,
    circleArea: function(r) {
        return this.pi * r * r;
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

// NOT allowed to touch mathLib, but your value for pi is incorrect!!!
// What to do now??