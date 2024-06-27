import { ethers } from 'ethers';
import { getSigner } from './ethers';
import property_abi from "../../artifacts/contracts/Property_Market.sol/Property_Market.json";

const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your deployed contract address

let propertyMarket;

const getPropertyMarket = async () => {
  const signer = await getSigner();
  if (!signer) {
    console.error('Signer not initialized');
    return null;
  }
  propertyMarket = new ethers.Contract(address, property_abi.abi, signer);
  console.log('Contract instance:', propertyMarket);
  return propertyMarket;
};

export default getPropertyMarket;
