/**
 * Generates a random integer between 1 and 10
 */
 function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

/**
 * Returns an array of 'n' randomly selected numbers between 1 and 10
 * @param {number} n - number of numbers (between 1 and 10) desired
 */
function multiRand(n) {
    for (let i = 0; i < n; i++) {
        let randnum = rand10();
        arr.push(randnum);
    }
    return arr;
}

let arr = [];
let num = Number(window.prompt("Enter the number of random numbers (between 1 and 10) that you would like to generate: "));
console.log(multiRand(num));