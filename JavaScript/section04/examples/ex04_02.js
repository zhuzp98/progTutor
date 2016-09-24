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
