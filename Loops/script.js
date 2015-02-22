//Tabitha Westfall 2/22 Loops
console.log('-----Loops-----')
var b = 50; // setups the index

while ( b > 0){ //checks the condition
    console.log(b + "kegs on the wall");
    b--; //increments or decrements the index
}

console.log("-----Do While Loop-----");

var c = 10;

do{
    console.log(c + "kegs on the wall"); //this code would still be ran if condition is false
    c--;
}
while(c > 0);