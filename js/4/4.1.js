/**
 * Calculates the surface area of a rectangle from a given length and width
 * @param {number} length
 * @param {number} width
 * @return {number} surface area
 */
function calcSurface(length, width) {
    return length * width;
}

let length = Number(window.prompt("Enter the length of the rectangle: "));
let width = Number(window.prompt("Enter the width of the rectangle: "));

console.log(calcSurface(length, width));