//Tabitha Westfall 2/23 Functions Worksheet- Circumference

var radius = 5; //given
var pi = 3.14; // given


var circ = calcCirc(radius, pi); //result variable
console.log("The circumference of the circle is " + circ + ".");

function calcCirc(r, p){
    return 2 * r * p;
}