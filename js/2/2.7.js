let n = Number(window.prompt("Please enter a number: "));
let sum = 0;

for (let i = 0; i < n; i++) {
    let num = Number(window.prompt("Please enter a new number: "));
    sum += num;
}
console.log(sum);
