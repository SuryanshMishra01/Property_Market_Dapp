# Property_Market_Dapp

This Solidity + React decentralized application works as a middleman or broker in property or land dealings. It ensures that correct rules and market rates are being followed and there is no scope of scamming and fraud in this model. Also, there is a plenty of space for improvement in this project.


# Description 
The project consists of 2 major folders:
### 1) Client
It is the frontend of our Dapp based on React+Vite app model.
Client -> src -> here we have 3 main files: 
1) ItemList.jsx: It contains all the major components and functions (like buyProperty(), handleAddProperty, etc) which are responsible for calling the smart contract functions.
2) PropertyMarket.jsx: This file fetches the contract ABI and creates the 'contract instance' and exports it.
3) ethers.jsx: This file gets us the provider, signer and establishes the conection with Metamask Wallet.

# Getting Started 

## Executing Program
To run this project follow these steps:
1) Git clone this repository in your local setup.
2) Ensure that all the libraries and dependencies (like nodejs, hardhat, ethersjs, etc.) are installed.
3) Open the project in VS Code, in 1st terminal run: npx hardhat node.
4) Create 2 more terminals, in 2nd run: npx hardhat ignition deploy ./ignition/modules/Property_Market.js --network localhost.
5) In 3rd terminal run: cd client
   and then run: npm run dev.

# Interacting with Project









# Author
Suryansh Mishra @suryanshmishra0704@gmail.com
# License
This project is licensed under the Apache License 2.0 - see the LICENSE.md file for details

