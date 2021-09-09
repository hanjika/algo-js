/**
 * Calculates and returns the distance between two points in 2D space
 * @param {array} A - 2D coordinates of point A
 * @param {array} B - 2D coordinates of point B
 * @return {number} distance between points A and B
 */
function calcDistance (A, B) {
    return Math.sqrt((Math.pow((B[0]-A[0]), 2)) + (Math.pow((B[1]-A[1]), 2)));
}

let A = [-2, 2];
let B = [2, -2];
console.log(calcDistance(A, B));