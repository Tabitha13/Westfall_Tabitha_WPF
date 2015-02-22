//Tabitha Westfall Functions 2/22

// functions allow us to have code that is written once, but able to be used again and again by the machine

//functions store stuff
//ex. plants vs zombies -- used to make plant receptively shoot zombie

//Types of Functions
// Functions - normal functions
// Procedures
//Anonymous

//normal function
//function functionName() { //parenthesis can be left empty
    //code the function runs
//}


//function outputMsg(){
 //   console.log("Hello World");
//}

//var width = 5; //scoped outside of function

//function calcArea(){ //sets up what function does
 //   var width = 20; //prefers to use var inside its own function
  //  var height = 30;
  //  var area = width * height;
  //  console.log(area);
//}
//console.log(width);
//calcArea();


//funcName (argument1, argument2);
//function funcName (parameter1, parameter2){
    //code the function runs
//}

//calArea(30, 20); //argument

//function calArea(w, h){ //parameter w=30 h=20
//    var area = w * h;
 //   console.log(area);
//}

//parameters and arguments

//function dogYears(age){ //parameters
  //  var dogYears = age * 7;
    //console.log("Sparky is " + dogYears + " years old.")
//}
//var age1 = 4;
//dogYears(age1); // () holds arguments
//dogYears(5);


//Returning Values

//var total = calcArea(30, 20);


//function calcArea(w, h){
 //   var area = w * h;
 //   return area; //function is spitting the info out
//}

//console.log(total);




//Function vs Procedure

//function
function calcAreaF(width, height){
    var area = width * height;
    return area;
}

//procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}