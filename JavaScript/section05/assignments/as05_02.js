/**
   Write a program that takes a string
   and output characters in the reverse order.
   Print each character on a single line.
*/

var str = "Hello World!";

for (var i = str.length - 1; i >= 0; i--) {
	console.log(str[i]);
}