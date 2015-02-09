// Tabitha Westfall February 9th 2015 Pay Check Calculator - Expressions Assignment

var hoursWorked = prompt("Please enter how many hours you worked this week."); //essential variable
var payRate = prompt("Please enter your hourly pay rate."); //essential variable

var commReceived = prompt("How many commissions did you earn this week? \n(If value is less then 1 please enter 0)"); //essential variable
var commRate = prompt("Please enter the dollar amount you receive per commission. \n(If you do not receive commissions, please enter 0.)"); //essential variable

var hourlyPay = hoursWorked * payRate; //will calculate hours times pay to give total
var commPay = commReceived * commRate; // will calculate commissions received by commission rate to give total

var payTotal = hourlyPay + commPay; //will combine totals

var taxedPay = payTotal * (89/100); // Pay check taxes are roughly 11% based off of my checks. This calculation should deduct that 11% from the pay total to give an accurate estimate.

console.log ("Based on the information that you provided, we determined that before taxes you earned $" + hourlyPay + " in hourly pay, plus $" + commPay + " in commissions. This will give you a total of $" + payTotal + " before taxes and $" + taxedPay + " after taxes.");
