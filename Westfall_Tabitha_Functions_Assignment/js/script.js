// Tabitha Westfall 2/24 Functions Assignment- Powerball or Florida Lottery


var choice = true;

choice = confirm("Hello! If you would like numbers for the Florida Lottery please click OK, or click Cancel for Powerball Numbers.");

if(choice === true) {

    function randomLotteryNum(min, max){ //arguments

        var lotteryArray = []; //give me 6 numbers

        for (var i = 0; i < 6; i++){ // will run i until it equals 6
            var lottery = Math.random() * (max - min) + min; //set up random number generator

            lottery = Math.round(lottery); //
            lotteryArray[i] = lottery;

        }

        return lotteryArray;

    }
    myNum = randomLotteryNum(1, 53);

    console.log("Your random Lottery Numbers are: " + myNum  );

}else{
    function randomPowerballNum(min, max){

        var powerballArray = [];

        for (var i = 0; i < 5; i++){
            var powerball = Math.random() * (max - min) + min;

            powerball = Math.round(powerball);
            powerballArray [i] = powerball;

        }

        return powerballArray;

    }
    myNum = randomPowerballNum(1, 59);

    console.log("Your random Powerball Numbers are: " +myNum  );

}

//main code
lotterNum = randomLotteryNum(1, 53);
powerballNum = randomPowerballNum(1, 59);