const Web3 = require("web3");
var web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/b9b162ab46d24d79b64cf39d47f60bbf"
  )
);
const address = "0x661CC7242171c5278A015c548198e63797B29b4c";
const ABI = [
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
web3.eth.getBalance; // проверяем
const myContract = new web3.eth.Contract(ABI, address);
myContract.methods.retrieve().call().then(console.log);
