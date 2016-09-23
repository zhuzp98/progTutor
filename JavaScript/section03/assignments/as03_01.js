/**
   Rework on the taxi problem of the assignment 02.
   This time use branch to calculate each total price.
   **Assignment02**
   For taxi in Guangzhou, $9 for the first 5km, $1.2 for each km
   between 5 and 10km, $2.6 for each km after 10km
   declare three variables for 4, 9, 16km of distance travel,
   declare three variables for each payment
   print the each payments and total on the screen;
*/

var distance = 16;

console.log("Payment:")
if (distance <= 5) {
	console.log("$9 (distance <= 5km)");
}
else if (5 < distance && distance <= 10) {
	console.log("$" + (5 + (distance - 5) * 1.6) ); 
	console.log("(disntance 5km<d<=10km)");
}
else {
	console.log("$" + (13 + (distance -10) * 2.6)); 
	console.log("(distance >10km)");
}