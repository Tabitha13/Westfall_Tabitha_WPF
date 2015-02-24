// Tabitha Westfall 2/24 Functions Assignment- Powerball or Florida Lottery

var choice = prompt("Hello! \nDo you want to Powerball numbers or Florida Lottery Numbers? \nPlease enter P for Powerball or L for Lottery"); //set up for function

function choiceValid(theChoice){

    var numOfTimes = 1;

    while (theChoice === "" ) {

        theChoice = prompt("Please make sure you are entering the correct spelling. \n P for Powerball or L for Lottery?");
        numOfTimes = numOfTimes + 1;

        if (numOfTimes === 5){
            console.log("Please stop wasting my time.");
            break;
        }

    }

    return theChoice;

}

choice = choiceValid(choice);
console.log("Thank you for choosing " + choice + ".")