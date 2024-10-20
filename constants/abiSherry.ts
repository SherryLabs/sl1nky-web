export const abiSherry = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_destinationContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_encodedFunctionCall",
        type: "bytes",
      },
    ],
    name: "createArbitraryMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "messenger",
    outputs: [
      {
        internalType: "contract ITeleporterMessenger",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_destinationContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_encodedFunctionCall",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_destinationAdress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_destinationChain",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newMessenger",
        type: "address",
      },
    ],
    name: "updateMessenger",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
