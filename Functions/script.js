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


function outputMsg(){
    console.log("Hello World");
}

function calcArea(){ //sets up what function does
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea(); //invocates function
calcArea(); //repeatable
calcArea(); //tells machine when to do function