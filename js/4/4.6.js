/**
 * Returns the factorial of number 'a'
 * @param {number} a - input number
 * @return {number} factorial of input number 'a'
 */
function factorial(a) {
    if (a == 0 || a == 1) {
        return 1;
    } else {
        return a * factorial(a - 1); 
    }
}

let num = Number(window.prompt("Please enter a number to return its factorial: "));
console.log(factorial(num));