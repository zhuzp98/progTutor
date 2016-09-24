/*
	This program is designed to determine whether the year is leap year.
	@author: Zhipeng Zhu

*/

var year = 2007;
console.log("Year:" + year);

if (((year % 4 == 0) && (year % 100)) || (year % 400 == 0)) {
	console.log("This year is leap year.");
}
else {
	console.log("This year is common year.");
}