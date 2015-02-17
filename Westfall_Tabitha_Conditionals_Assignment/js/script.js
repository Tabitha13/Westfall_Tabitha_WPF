// Tabitha Westfall February 17th 2015 Conditionals Assignment

//varibles
var donateShoes = 4;
var netWorth = true;

//confirm boolean variable
netWorth = confirm("If you have at least $100 click OK, if not click cancel");

if(netWorth === true) { //this runs if i click ok for having $100
    var pairsOfShoes = prompt("How many shoes do you own?"); //prompt to give shoe varialbe

        if(pairsOfShoes <= donateShoes && netWorth <= 100) { //logical conditional
            console.log("You can buy more shoes!");
        }else{
            var donateAmount = pairsOfShoes - donateShoes; //math
            console.log("You need to donate " + donateAmount + " pairs of shoes first.");
        }

}else{ //this runs if i click cancel
    var actualNetWorth = prompt("How much money do you have?"); //finds out how much money i have
    var moneyNeed = 100;
    var saveAmount = moneyNeed - actualNetWorth; //math
    (actualNetWorth) ? console.log("You need to save $" + saveAmount + " before you can get more shoes.") : console.log("Hey you didn't enter how much money you have");
}


//IT WORKS!! SORRY I'M VERY HAPPY. (:






//}else{ //this runs if i click cancel
  //  var actualNetWorth = prompt("How much money do you have?"); //finds out how much money i have

 //   if(actualNetWorth === ""){
  //      console.log("Hey you didn't enter how much money you have"); //runs if i leave something blank
  //  }else{
   //     var moneyNeed = 100;
  //      var saveAmount = moneyNeed - actualNetWorth; //math
  //      console.log("You need to save $" + saveAmount + " before you can get more shoes."); //tells me how much money i have to save
 //   }
//}