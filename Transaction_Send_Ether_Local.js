var Tx = require('ethereumjs-tx').Transaction;

const Web3 = require('web3');
let rpcURL = "HTTP://127.0.0.1:7545";
const web3 = new Web3(rpcURL);

const account1 = "0xFA8D2Eb9678922d0cB4e7D26AaBCFFF977754475";
const account2 = "0xCE32c717f84e5d959fAF5b9CBAaa568E9382f951";

const privateKey1 = "ee94bdeb365c78403355ab9d987985fabb198d8a15808598a0eaf55146aeaaeb";
const privateKey2 = "46691bf71ed7bb043c20cc7c2cc30fc53573506b73ee88ddddc829cb89c0f358";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');
const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

console.log("Buufer 1 = ", privateKey1Buffer);
console.log("Buufer 2 = ", privateKey2Buffer);

web3.eth.getTransactionCount(account1, (err, txCount) => {
    //Build a transaction object
    let txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('2', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }

    //Sign the transaction
    const tx = new Tx(txObject);
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    console.log('Tx = ', tx);
    console.log('serializedTx = ', serializedTx);
    console.log('raw = ', raw);

    //Broadcast to network
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash = ', txHash)
    });
});
