/**
   Write a program to compute the cube of 1 through n
   Store the values in a array
   Output the results
*/

var arr = [];
var N = 10;

for (var i = 1; i <= N; i++) {
	arr[i-1] = i * i * i;
}
console.log(arr);