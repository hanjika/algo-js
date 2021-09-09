/**
 * Returns an array of randomly selected Hopper students
 * @param {array} inputAr - input array of all students (their names as strings)
 * @param {number} n - number of names desired
 * @return {array} array of 'n' names of students
 */
function pickLearner(inputAr, n) {
    if (n > inputAr.length) {
        return "Chosen number is greater than the number of learners";
    } else if (n < 1) {
        return "Chosen number must be greater than zero";
    } else {
        for (let i = 0; i < n; i++) {
            let randnum = Math.floor(Math.random() * inputAr.length);
            finalAr.push(inputAr[randnum]);
            inputAr.splice(randnum, 1);
        }
        return finalAr;
    }
}

let finalAr = [];
let arr = ["Kévin", "Martin", "Léon", "Mohammad", "Hanna", "Victor", "Esteban", "Youssef", "Shanon", "Dylan", "Aubry"];
let num = Number(window.prompt("How many students would you like to pick?"));
console.log(pickLearner(arr, num));