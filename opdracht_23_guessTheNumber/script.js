'use strict'


let groet = confirm('Welcome to the Game! Are you ready? Press "OK"')

let getName = prompt("What is your name?");

let sayHi = alert('Hello ' + getName + "!");

let getStart = confirm("The rules are simple. You must guess the number! Remember! You have only 5 attepmts. Press 'OK' and let's get started");

let getMinimum = prompt("Type the minimum number");

let getMaximum = prompt("Type the maximum number");

let min = getMinimum;
let max = getMaximum;

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


let randomDig = getRandom(getMinimum, getMaximum);
console.log(randomDig);


function checkDig(userPlays, randomDig) {
    console.log("user's number " + userPlays);

    if (randomDig != userPlays) {
        return userPlays

    } else if (randomDig === userPlays) {
        return alert("You won " + getName + "!" + " The game is over! Good job!");
    }
}

let i = 5;
do {

    let userPlays = +prompt("Type on a number between " + getMinimum + " and " + getMaximum);

    checkDig(userPlays, randomDig);
    if (randomDig === userPlays) {
        break
    }

    if (i != 1 && randomDig != userPlays) {
        alert("Nope, you don't get it. You have " + `${i - 1}` + " more attempts");
    }


    if (i == 1) {
        alert(getName + " Not this time... The game is over... Reload the page and play one more time");
    }

    i--;

} while (i > 0);


