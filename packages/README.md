# Amazon Connect Example Contact Center
## An Example Amazon Connect Implementation

(WIP) This repo contains a deployable, functional Amazon Connect contact center
complex enough to be useful for learning and developing POC projects around a 
Connect instance and not so large and complex as to be a maintainer's nightmare.

Features:
1. Dedicated IAM service roles
2. VPC for internal communication between Connect and AWS services
3. Full self service menus and agent queues
4. Queues, routing profiles and quick connects
5. Contact flows utilizing Lex and custom lambdas
6. An API Gateway that serves as a mock API for customer data
7. Lex bots for user input
8. Lambdas invoked by IVR for auth, customer lookup, etc.

## Contact Center for a Fictitious Bank

### Self Service Items:
1. Authenticate: Account number and DOB or PIN
2. Check Balances: Checking / Savings / Credit Card
3. Reset PIN
4. Update Contact Info
5. Transfer Money
6. Order Checks
7. Speak to Agent

### User API will be simple for demonstration purposes
1. Basic Contact Info
2. Accounts
    1. Checking / Savings
        1. Routing num / Acct #
        2. Available Balance
        3. Transaction history
    2. Credit Card
        1. CC #
        2. Exp date
        3. CCV
        4. Available Balance
        5. Transaction history

## Data Models

Customer
* Id
* Profile
    * First Name
    * Middle Initial
    * Last Name
* Address
    * Address 1
    * Address 2
    * City
    * State
    * Zip Code
* Phone
    * Home
    * Mobile
* DOB
* PIN

Bank Account
* Customer Id
* Account Number
* Account Type (Checking/Savings)
* Available Balance
* Transactions
* Check Number

Credit Card
* Customer Id
* Account Number
* Expiration Date
* CCV
* Balance
* Available Balance
* Transaction History
