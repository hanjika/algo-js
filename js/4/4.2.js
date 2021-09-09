/**
 * Generates a random integer between 1 and 10
 * @return {number} randomly generated number
 */
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(rand10());