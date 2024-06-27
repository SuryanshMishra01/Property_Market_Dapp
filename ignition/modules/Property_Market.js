const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Property_MarketModule", (m) => {
 
  const propertyContract = m.contract("Property_Market", []);
 
  return { propertyContract };
});
