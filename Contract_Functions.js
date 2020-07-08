console.log(Web3);
const rpcURL = "https://ropsten.infura.io/v3/093e1b06d31c4737ae762ebeedc58490";
const web3 = new Web3(rpcURL);

let abi =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retreive",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let contractAddress = "0x1f46faB2c412f33396933200fC9C28235757200b";

const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.getAge().call(function (err, result) {
    console.log("Age = ", result);
});

contract.methods.doSomeWork().call(function (err, result) {
    console.log("Work = ", result);
});
