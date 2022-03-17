const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("Infura Mainet url");
const addressReceiver = "Ethereum Address of the receipent";

const privateKeys =[" your private keys"];

const bot = async () => {
    provider.on("block", async () => {
      console.log("Listening new block, waiting..)");
      for (let i = 0; i < privateKeys.length; i++) {
        const _target = new ethers.Wallet(privateKeys[i]);
        const target = _target.connect(provider);
        const balance = await provider.getBalance(target.address);
        const txBuffer = ethers.utils.parseEther(".005");
        if (balance.sub(txBuffer) > 0) {
          console.log("NEW ACCOUNT WITH ETH!");
          const amount = balance.sub(txBuffer);
          try {
            await target.sendTransaction({
              to: addressReceiver,
              value: amount
            });
            console.log(`Success! transfered --> ${ethers.utils.formatEther(balance)}`);
          }
          catch (e) {
              console.log(`error: ${e}`);
          }
        }
      }
    });
  }
  
  bot();