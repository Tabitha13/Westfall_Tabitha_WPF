// Tabitha Westfall 2/23 Functions Worksheet - Stung!

var victimWeight = 120; //given
var stings = 8.666666667; //given

var beeStings = calcStings(victimWeight, stings); // argument
console.log("It takes " + beeStings + " bee stings to kill this animal.");

function calcStings(vW, s ){
    return vW* s;

}
