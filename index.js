document.addEventListener("DOMContentLoaded", function(event){

    let calcSum_button = document.getElementById("calcSum");
    let rollDice_button = document.getElementById("rollDice");

calcSum_button.addEventListener("click", function(event){
    calcSum();
});
rollDice_button.addEventListener("click", function(event){
    rollDice();
    console.log("kasta");
});
});

function calcSum(){
    let ones = document.getElementById("ones").valueAsNumber;
    let twos = document.getElementById("twos").valueAsNumber;
    let threes = document.getElementById("threes").valueAsNumber;
    let fours = document.getElementById("fours").valueAsNumber;
    let fives = document.getElementById("fives").valueAsNumber;
    let sixes = document.getElementById("sixes").valueAsNumber;
    
    let sum = ones + twos + threes + fours + fives + sixes;
    document.getElementById("sum").value = sum;
    
    if (sum >=63){
        document.getElementById("bonus").innerHTML = 50;
    }
}

function rollDice(){
    for (let i = 0; i < 5; i++) {
        let checkbox = document.getElementById("checkbox" + i);

    if (!checkbox.checked){
        document.querySelectorAll("img")[i].setAttribute("src", "images/dice" + getRandomInt() + ".png");
    }

}
}

function getRandomInt(){
    let randomInt = Math.floor(Math.random()* 6) +1;
    return randomInt;
}

$(document).ready(function(){
    $(".chkbx").hide();
});

document.addEventListener("DOMContentLoaded", function(event){
    for(let i = 0; i < 5; i++){
        document.getElementById("checkbox" + i).addEventListener("change", selectFreeze);
    }
});

function selectFreeze(){
        for (let i = 0; i < 5; i++) {
            let checkbox = document.getElementById("checkbox" + i);

        if (checkbox.checked){
            document.querySelectorAll("img")[i].style.opacity = "0.3";
        }
        else if(!checkbox.checked){
            document.querySelectorAll("img")[i].style.opacity = "1";
        }
        }
}

document.addEventListener("DOMContentLoaded", function(event){
    let resetDices = document.getElementById("resetDices");
    resetDices.addEventListener("click", unfreeze);
});

function unfreeze(){
    for (let i = 0; i < 5; i++) {
        let checkbox = document.getElementById("checkbox" + i);

    if (checkbox.checked){
        !checkbox.checked;
        document.querySelectorAll("img")[i].style.opacity = "1";
    }
    }
}