// Tabitha Westfall 2/24 Functions Assignment- Powerball or Florida Lottery


var choice = true;

choice = confirm("Hello! If you would like numbers for the Florida Lottery please click OK, or click Cancel for Powerball Numbers.");

if(choice === true) {

    function randomLotteryNum(min, max){

        for (var i = 0; i < 6; i++){
            var lottery = math.random() * (max - min) + min;

            lottery = math.round(lottery);
        }

        return lottery;
    }

}else{

}