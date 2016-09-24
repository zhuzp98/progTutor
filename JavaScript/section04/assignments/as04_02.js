/**
   Write a program to calculate the sum from
   0 to n, print the sum each time (even n is 0)
*/

var n = 1;
var i = 0;
var sum = 0;

do {
	sum += i;
	console.log(sum);
	i++;
}while (i <= n);

console.log("Sum = " + sum);