// Tabitha Westfall February 17th 2015 Conditionals Assignment

//varibles
var pairsOfShoes = prompt("How many shoes do you own?");
var donateShoes = 4;
var netWorth = true;

//confirm boolean variable
netWorth = confirm("If you have at least $100 click OK, if not click cancel");

if(netWorth === true && pairsOfShoes <= donateShoes){
//this code will run if i have at least $100 and less than or equal to 4 pairs of shoes
    console.log("You can buy more shoes!!")
    }else{
    //runs if i dont have both $100 and 4 pairs of shoes or less
    console.log("Maybe you should hold off on getting new shoes for now.")
}

