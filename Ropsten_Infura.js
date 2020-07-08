//accessed through node module
console.log(Web3);

const rpcURL = "https://ropsten.infura.io/v3/093e1b06d31c4737ae762ebeedc58490";

let web3 = new Web3(rpcURL);

let address = "0xe232CA18c11fb1D1834076188C44bdFCa84890d8";

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
