// Problem 14
/*
This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
*/

function determinePi() {
    const iterations = 10000000;
    let insideCircle = 0;

    for (let i = 0; i < iterations; i++) {
        let x = Math.random()*2 - 1;
        let y = Math.random()*2 - 1;

        if (x*x + y*y < 1) {
            insideCircle++;
        }
    }

    return (4*insideCircle)/(iterations + 0.0);
}

console.log(determinePi());