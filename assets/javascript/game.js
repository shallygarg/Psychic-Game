
// Declare variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var guess = "";
var win = 0;
var losses = 0;
var remaining = 5;

// Printing the computer guess to console
console.log(computerGuess);

//Assigning values to the elements
document.querySelector("#win").textContent = win;
document.querySelector("#losses").textContent = losses;
document.querySelector("#remaining").textContent = remaining;

//Capturing the keypress event
document.onkeyup = function(event) {
    guess = event.key;
    console.log(guess);
    document.querySelector("#lettersGuessed").append(guess + ", ");
    if (guess === computerGuess){
        win();
    }else{
        loss();
        remaining--;
        document.querySelector("#remaining").textContent = remaining;
        if(remaining === 0){
            alert("Game over");
            reset();
        } 
        
    }

    function win(){
        win++;
        document.querySelector("#win").textContent = win;
        alert("You won!");
        reset();
    }

    function loss(){
        losses++;
        document.querySelector("#losses").textContent = losses;
    }

    function reset(){   
       location.reload();
    }

}