// Tabitha Westfall February 9th 2015 Expressions Worksheet
//Discounts

var originalPrice = 200;
var discountPercent = 50;
var description = "Fishtank";
var salesTax = 07;
var discountPrice = originalPrice * (discountPercent / 100); //equation finding the price after discount
var withTax= discountPrice * (1 + (salesTax / 100)); //equation finding discounted price with tax

console.log("Your " + description + " was originally $" + originalPrice + ", but after a " + discountPercent +"% discount, it is now $" + discountPrice + " without tax, and $" + withTax + " with tax."); //displays answer in console

