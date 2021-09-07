let num = Number(window.prompt("Enter your favourite number: "));

while (num) {
    if (num == 42) {
        console.log("Congratulations! That is the best number.");
        break;
    }
    else {
        num = Number(window.prompt("Are you sure? Enter your favourite number again: "))
    }  
}