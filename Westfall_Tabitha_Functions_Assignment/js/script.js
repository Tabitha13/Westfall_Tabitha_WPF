// Tabitha Westfall 2/24 Functions Assignment- Powerball or Florida Lottery

var choice = prompt("Hello! \nDo you want to Powerball numbers or Florida Lottery Numbers? \nPlease enter Powerball or Lottery"); //set up for function

function choiceValid(theChoice){
    while (theChoice === "") {
        theChoice = prompt("Please make sure you are entering the correct spelling. \n Powerball or Lottery?");

    }
}