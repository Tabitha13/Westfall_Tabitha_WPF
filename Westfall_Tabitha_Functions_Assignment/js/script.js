// Tabitha Westfall 2/24 Functions Assignment- Powerball or Florida Lottery


var choice = true;

choice = confirm("Hello! If you would like numbers for the \nFlorida Lottery please click OK, \nor click Cancel for Powerball Numbers.");

if(choice === true) {

    function randomLotteryNum(min, max){ //arguments

        var lotteryArray = []; //give me 6 numbers

        for (var i = 0; i < 6; i++){ // will run i until it equals 6
            var lottery = Math.random() * (max - min) + min; //set up random number generator

            lottery = Math.round(lottery); // rounds numbers to whole nums
            lotteryArray[i] = lottery; //will display the array

        }

        return lotteryArray;

    }
    myNum = randomLotteryNum(1, 53); //parameters

    console.log("Your random Lottery Numbers are: " + myNum  ); //display nums

}else{ //happens if user clicks cancel
    function randomPowerballNum(min, max){ //arguments

        var powerballArray = []; //will give me 5 nums

        for (var i = 0; i < 5; i++){ //will run until i equals 5
            var powerball = Math.random() * (max - min) + min; //set up random num

            powerball = Math.round(powerball); //rounds nums to wholes
            powerballArray [i] = powerball; // will display array

        }

        return powerballArray;

    }
    myNum = randomPowerballNum(1, 59); //parameters

    console.log("Your random Powerball Numbers are: " +myNum  ); //display nums

}

//main code
lotterNum = randomLotteryNum(1, 53);
powerballNum = randomPowerballNum(1, 59);