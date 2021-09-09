//let arr = [1, 2, 3, 4, 5];
let arr = [100, 101, 102];
let sum = 0;

for (let elem of arr) {
    sum += elem;
}
let average = sum / arr.length;
console.log(average);