let targetNumber = Math.floor(Math.random() * 10) + 1;
var clicks = 0;
document.getElementById("button").addEventListener("click", init);

function init() {
    var input = document.getElementById("input").value;
    var number = Number(input);
    clicksCounter();
    validation(number);
}

function clicksCounter() {
    clicks += 1;
}

function messageChange() {
    var messages = ["You don't guess.", "Not this time.", "Try again.", "Maby another time.", "You missed.", "Need another chance?", "Nope."];

    var message = messages[Math.floor(Math.random() * messages.length)];
    result.textContent = message;
}

function colorChange() {
    if (clicks == 2) {
        document.getElementById("result").style.color = "blue";
    } else if (clicks == 3) {
        document.getElementById("result").style.color = "yellow";
    } else if (clicks == 4) {
        document.getElementById("result").style.color = "orange";
    }
}

function validation(elem) {
    var allowedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (allowedNums.includes(elem)) {
        check(elem);
    } else {
        result.textContent = "Enter proper number."
    }
}

function check(myNum) {
    if (myNum == targetNumber) {
        document.getElementById("result").style.color = "green";
        result.textContent = "You win!"
        button.disabled = true;
        startAgain.textContent = "Want to play again? Start a new game."
        document.getElementById("refresh").classList.remove('hidden-btn');
    } else if (clicks == 5) {
        document.getElementById("result").style.color = "red";
        result.textContent = "You lose!";
        button.disabled = true;
        startAgain.textContent = "Want to play again? Start a new game."
        document.getElementById("refresh").classList.remove('hidden-btn');
    } else {
        messageChange();
        colorChange();
    }
}