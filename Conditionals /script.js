//Tabitha Westfall 2/17 Conditionals Learning Exercises

//logic
//sunny=true
//if(sunny){
    //goToTheBeach();
//}else{}

//temp = 82
//if(temp > 70){
  //  goToTheBeach();
//}

//nesting
//if(sunny){
    //goToTheBeach();

   // if(warmWater) {
    //    wearNewSuit();
  //  }
//} else{
    //goToTheMovies();
//}

//if(sunny) {
  //  goToTheBeach();
//}else{
  //  goToTheMovies();
//}

//Conditional Logic
var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45; //the height of kid with parents
//if child is old enough print to the console "you can ride"
//if kid is  over 48 inches in height
 if(kidHeight > minHeight ){
   //code performed if condition is true
   console.log("You can ride the coaster!");
 } else if(kidHeight > wParentHeight){
     //you can ride if parent present
    console.log("You can ride but only with a parent present");
}else{
     console.log("Sorry kid, you've got some growing to do first");
}
