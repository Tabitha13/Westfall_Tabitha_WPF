//Tabitha Westfall 2/23 Functions Worksheet- Circumference

var radius = 5; //given
var pi = 3.14; // given


var circ = calcCirc(radius, pi); //result variable //arguements
console.log("The circumference of the circle is " + Math.round(circ) + "."); //print circumference to console

function calcCirc(r, p){ //parameters
    return 2 * r * p; //equation to find circ
}

