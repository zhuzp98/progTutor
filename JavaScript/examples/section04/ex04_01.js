console.log("Version 01");
var account1 = 100;
var rate1 = 0.05;

console.log("Your account has $" + account1);
while (account1 < 200) {
    account1 += rate1 * account1;
    console.log("Your account now has $" + account1);
}
