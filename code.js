function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;

    if (sum == 7 || sum == 11) {
        document.getElementById("FinalRes").innerHTML = "CRAPS - you lose";
        // This line takes the number 7 and 11 and assigns the statement,
        // "CRAPS - you lose" if either of those numbers come up when the equations take place
        
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("FinalRes").innerHTML = "DOUBLES - you win";
        // This line takes die1 and die2 which are random numbers multiplied by 6 then mods those by two
        // If you get a number that fits those parameters you get the statement, " Doubles - you win"

    } else {
        document.getElementById("FinalRes").innerHTML = "Draw - You did not win or lose, please try again.";
        // This line takes the random number that has been mulitplied by 6 and if it is any number that isn't one 
        // that does not fit the parameters of the functions above
        // It states, "Draw - You did not win or lose, please try again."

    }
        // This entire else, esle if and else statement runs the onclick button and allows you to play craps
        // Stating various things whether you win, lose or draw based upon the outcome of the equations

}

function betterBlastOff(){
    console.log("betterBlastOff() started");
    var currTime = 50;
    for(var i = 0; i < 10; i = i + 1){
    // The for loop assigns a var I 0, then states if it is less than 10 to continue added 1
        setTimeout(function(){
            console.log(i);
            document.getElementById("countDownTimer").innerHTML = currTime;
            currTime = currTime - 5;
        },5000 * i);
    }
    setTimeout(function(){
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
    }, 50000);
    // The timeout functon takes the var currTime, which has been assigned the value 50  
    // It then takes that value, subtracts by 5 every 5 seconds using the 5000 * i equation
    // After the countdown reaches 0 it uses the getElementById statement to write to the HTML 
    // The phrase Blast Off!
}