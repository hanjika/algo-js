let min = Number(window.prompt("Enter a number: "));
let max = Number(window.prompt("Enter a larger number: "));
let current = Number(window.prompt("Enter a final number: "));

if ((current > min) && (current < max)) {
    console.log("Well done! Your final number has a value between your first two numbers.");
} else if (min > max) {
    console.error("ERROR: You did not enter a larger number when instructed.");
}