console.log("Version 01");
var account1 = 100;
var rate1 = 0.05;

console.log("Your account has $" + account1);
while (account1 < 200) {
    account1 += rate1 * account1;
    console.log("Your account now has $" + account1);
}


console.log("Version 02");
var account2 = 100;
var rate2 = 0.05;
var count = 0;

console.log("Your account has $" + account2);
while (account2 < 200) {
    account2 += rate2 * account2;
    count++;
    console.log("Year " + count);
    console.log("Your account now has $" + account2);
}
