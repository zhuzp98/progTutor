/**
   Write a program to calculate the sum from 1 to 100
   Print the final result on the screen;
*/

console.log("Sum from 1 to 100");
var number = 1;
var sum = 0;

while (number <= 100) {
	sum += number;
	number++;
}
console.log("Sum = " + sum);