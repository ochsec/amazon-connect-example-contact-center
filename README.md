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

