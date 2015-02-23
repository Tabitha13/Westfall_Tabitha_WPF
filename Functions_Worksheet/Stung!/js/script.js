// Tabitha Westfall 2/23 Functions Worksheet - Stung!

var victimWeight = 120; //given
var stings = 8.666666667; //given

var beeStings = calcStings(victimWeight, stings); // argument
console.log("It takes " +  Math.round(beeStings) + " bee stings to kill this animal."); // prints to console

function calcStings(vW, s ){ //parameters
    return vW* s; //equation to find bee stings

}
