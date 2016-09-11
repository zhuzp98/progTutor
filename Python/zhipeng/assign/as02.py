##
## There are three bank account with $1000, $2000, $10000
## declare three variables for the accounts
## Suppose the interets rate at the bank is 5%,
## and suppose the accounts stored for 5 years
## declare three variables to store the interets for each account
## update the account variables with total amount
## print the interets and total amount on the screen
## e.g.
## account1:
## 276.27
## 1276.27

account1 = 1000
account2 = 2000
account3 = 10000

interests1 = account1 * (1.05 * 1.05 * 1.05 * 1.05 * 1.05 - 1)
interests2 = account2 * (1.05 * 1.05 * 1.05 * 1.05 * 1.05 - 1)
interests3 = account3 * (1.05 * 1.05 * 1.05 * 1.05 * 1.05 - 1)

account1 += interests1
account2 += interests2
account3 += interests3

print ("")
print ("account1")
print (interests1)
print (account1)
print ("")
print ("account2")
print (interests2)
print (account2)
print ("")
print ("account3")
print (interests3)
print (account3)



