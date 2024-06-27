import { ethers } from 'ethers';

let provider;
let signerPromise;

if (window.ethereum) {
  provider = new ethers.BrowserProvider(window.ethereum);
  signerPromise = window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
    return provider.getSigner(accounts[0]);
  }).catch(error => {
    console.error("Error requesting accounts from MetaMask:", error);
  });
} else {
  console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

const getSigner = async () => {
  return signerPromise;
};

export { provider, getSigner };
