# Property_Market_Dapp

This Solidity + React decentralized application works as a middleman or broker in property or land dealings. It ensures that correct rules and market rates are being followed and there is no scope of scamming and fraud in this model. Also, there is a plenty of space for improvement in this project.


# Description 
The project consists of 2 major folders:
#### 1) Client
It is the frontend of our Dapp based on React+Vite app model.
Client -> src -> here we have 3 main files: 
1) ItemList.jsx: It contains all the major components and functions (like buyProperty(), handleAddProperty, etc) which are responsible for calling the smart contract functions.
2) PropertyMarket.jsx: This file fetches the contract ABI and creates the 'contract instance' and exports it.
3) ethers.jsx: This file gets us the provider, signer and establishes the conection with Metamask Wallet.
#### 2) Contracts
This folder contains our smart contract 'Property_Market.sol' which has 2 functions addProperty() and buyProperty().
The struct Property represents the property objects and a mapping named 'properties' is used to map property object with an unique id.
# Getting Started 

## Executing Project
To run this project follow these steps:
1) Git clone this repository in your local setup.
2) Ensure that all the libraries and dependencies (like nodejs, hardhat, ethersjs, etc.) are installed.
3) Open the project in VS Code, in 1st terminal run: npx hardhat node.
4) Create 2 more terminals, in 2nd run: npx hardhat ignition deploy ./ignition/modules/Property_Market.js --network localhost.
5) In 3rd terminal run: cd client
   and then run: npm run dev.

## Interacting with Project
This is the interface with 2 properties already added and trying to add 1 more.

![image](https://github.com/SuryanshMishra01/Property_Market_Dapp/assets/116947777/18dae3b8-aad4-45b6-bb4c-bd4cf19465bb)

Confirming the transaction from Metamask Wallet

![image](https://github.com/SuryanshMishra01/Property_Market_Dapp/assets/116947777/60bb51df-c177-4162-a2e2-6af3e2914c0b)

Now just click on Buy button to purchase any properties in the list and when a property is purchased the Buy button will be disabled 

![image](https://github.com/SuryanshMishra01/Property_Market_Dapp/assets/116947777/ec58ac5e-d15c-4b85-83da-08c6fee3df1a)

# Author
Suryansh Mishra @suryanshmishra0704@gmail.com
# License
This project is licensed under the Apache License 2.0 - see the LICENSE.md file for details

