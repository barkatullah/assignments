const Web3 = require("web3");

console.log(Web3);

const rpcURL = "http://127.0.0.1:7545";

let web3 = new Web3(rpcURL);

console.log("web3 instance = ", web3);

let address = "0xFA8D2Eb9678922d0cB4e7D26AaBCFFF977754475";

web3.eth.getBalance(address, function (err, wei){
    console.log("Wei ", wei);
    let balance = web3.utils.fromWei(wei, "ether");
    console.log("Balance ", balance);
});
