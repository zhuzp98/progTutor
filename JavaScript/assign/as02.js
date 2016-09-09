/**
   For taxi in Guangzhou, $9 for the first 5km, $1.2 for each km
   between 5 and 10km, $2.6 for each km after 10km
   declare three variables for 4, 9, 16km of distance travel,
   declare three variables for each payment
   print the each payments and total on the screen;
*/

var distance1 = 4;
var distance2 = 9;
var distance3 = 16;

var payment1;
var payment2;
var payment3;

payment1 = 9;
console.log(payment1);

payment2 = 9 + (distance2 - 5) * 1.2;
console.log(payment2);

payment3 = 9 + 5 * 1.2 + (distance3 - 10) *2.6;
console.log(payment3);