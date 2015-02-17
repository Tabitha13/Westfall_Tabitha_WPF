// Tabitha Westfall February 17th 2015 Conditionals Assignment

//varibles
var donateShoes = 4;
var netWorth = true;

//confirm boolean variable
netWorth = confirm("If you have at least $100 click OK, if not click cancel");

if(netWorth === true) {
    var pairsOfShoes = prompt("How many shoes do you own?");

        if(pairsOfShoes <= donateShoes && netWorth >= 100) {
            console.log("You can buy more shoes!");
        }else{
            var donateAmount = pairsOfShoes - donateShoes;
            console.log("You need to donate " + donateAmount + " pairs of shoes first.");
        }

}else{
    var actualNetWorth = prompt("How much money do you have?");

        if(actualNetWorth === ""){
            console.log("Hey you didn't enter how much money you have")
        }else{
            var saveAmount = netWorth - actualNetWorth;
            console.log=("You need to save $" + saveAmount + " before you can get more shoes.")
        }
}