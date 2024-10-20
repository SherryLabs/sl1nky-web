import { type Metadata } from "./interfaces/Metadata";
import { abi } from "../../constants/abi";

export const metadata: Metadata[] = [
  {
    type: "action",
    icon: "https://plus.unsplash.com/premium_vector-1720931652710-7bfbe41ae29a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Secure Transaction",
    description: "Ensure all your transactions are encrypted and safe.",
    label: "Security",
    disabled: false,
    actions: [
      {
        label: "Set Greeting",
        contractAddress: "0x2f4462dab28A090B4BEF9906CCd6bBd803D3E21c",
        contractABI: abi,
        transactionParameters: [
          {
            type: "string",
            label: "_greeting",
            value: "Hello, World!",
          },
        ],
        blockchainActionType: "write",
        functionName: "setGreeting",
        chainId: "Ethereum",
      },
      {
        label: "Set Counter",
        contractAddress: "0x2f4462dab28A090B4BEF9906CCd6bBd803D3E21c",
        contractABI: abi,
        transactionParameters: [
          {
            type: "uint256",
            label: "_counter",
            value: BigInt(1),
          },
        ],
        blockchainActionType: "write",
        functionName: "setCounter",
        chainId: "Ethereum",
      },
    ],
  },
  {
    type: "action",
    icon: "https://plus.unsplash.com/premium_vector-1720931652710-7bfbe41ae29a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Secure Transaction",
    description: "Ensure all your transactions are encrypted and safe.",
    label: "Security",
    disabled: false,
    actions: [
      {
        label: "Set Greeting",
        contractAddress: "0x2f4462dab28A090B4BEF9906CCd6bBd803D3E21c",
        contractABI: abi,
        transactionParameters: [
          {
            type: "string",
            label: "_greeting",
          },
        ],
        blockchainActionType: "write",
        functionName: "setGreeting",
        chainId: "Ethereum",
      },
      {
        label: "Set Counter",
        contractAddress: "0x2f4462dab28A090B4BEF9906CCd6bBd803D3E21c",
        contractABI: abi,
        transactionParameters: [
          {
            type: "uint256",
            label: "_counter",
          },
        ],
        blockchainActionType: "write",
        functionName: "setCounter",
        chainId: "Ethereum",
      },
    ],
  },
];
