const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const CoinSentiment = await hre.ethers.getContractFactory("CoinSentiment");
  const coinsentiment = await CoinSentiment.deploy();

  await coinsentiment.deployed();

  console.log("CoinSentiment deployed to:", coinsentiment.address);

  fs.writeFileSync(
    "./config.js",
    `
  export const marketplaceAddress = "${coinsentiment.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
