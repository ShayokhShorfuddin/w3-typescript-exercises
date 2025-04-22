"use strict";
function areaOfTriangle(side1, side2, side3) {
    // Find the semi-perimeter
    const semiPerimeter = (side1 + side2 + side3) / 2;
    // Calculate the area using Heron's formula
    return Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
}
console.log(areaOfTriangle(5, 6, 7));
