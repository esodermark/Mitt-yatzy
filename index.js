document.addEventListener("DOMContentLoaded", function(event){

    let calcSum_button = document.getElementById("calcSum");
    let rollDice_button = document.getElementById("rollDice");
    
calcSum_button.addEventListener("click", function(event){
    calcSum();
    calcTotal();
});
rollDice_button.addEventListener("click", function(event){
    rollDice();
    console.log("kasta");
});
});

function rollDice(){
    let dice = [];
    for (let i = 0; i < 5; i++) {
        const newDice = Math.floor(Math.random()*7);
        dice.push(newDice);
    }
    console.log(dice);
}

function calcSum(){
    let ones = document.getElementById("ones").valueAsNumber;
    let twos = document.getElementById("twos").valueAsNumber;
    let threes = document.getElementById("threes").valueAsNumber;
    let bonus = document.getElementById("bonus").valueAsNumber;

    let sum = ones + twos + threes;
    console.log(sum);

    if (sum >=63){
        document.getElementById("bonus").innerHTML = 50;
    }
}

function calcTotal(){
    document.getElementById("total").innerHTML;
}

function rollDice(){
    let dice = [];
    for (let i = 0; i < 5; i++) {
        const newDice = Math.floor(Math.random()* 6) +1;
        dice.push(newDice);
        document.querySelectorAll("img")[i].setAttribute("src", "images/dice" + newDice + ".png");
    }
    console.log(dice);
}
  
