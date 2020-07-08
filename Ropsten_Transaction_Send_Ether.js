var Tx = require('ethereumjs-tx').Transaction;

const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/093e1b06d31c4737ae762ebeedc58490');

const account1 = '0xe232CA18c11fb1D1834076188C44bdFCa84890d8';
const account2 = '0xFA8D2Eb9678922d0cB4e7D26AaBCFFF977754475';

const privateKey1 = '7BAF62C16D5BDC02C5D1D0CD383A6B347E89E4DCE4B859236E402A71E35BF255';
const privateKey2 = 'EE94BDEB365C78403355AB9D987985FABB198D8A15808598A0EAF55146AEAAEB';

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');
const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

console.log("Buffer 1 = ", privateKey1Buffer);
console.log("Buffer 2 = ", privateKey2Buffer);

web3.eth.getTransactionCount(account1, (err, txCount) => {
    //Build Transaction
    let txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.5', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    //Sign Transaction
    const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' });
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    //Broadcast Transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash = ', txHash);
    });
});
