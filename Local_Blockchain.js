//accessed through node module
console.log(Web3);

const rpcURL = "http://127.0.0.1:7545";

let web3 = new Web3(rpcURL);

let address = "0xFA8D2Eb9678922d0cB4e7D26AaBCFFF977754475";

web3.eth.getBalance(address, (err, wei) => {
    if (err) {
        console.log("It is Error ", err);
    }
    else {
        console.log("WEI ", wei);
        let balance = web3.utils.fromWei(wei, "ether");
        console.log("Balance ", balance);
    }
});
