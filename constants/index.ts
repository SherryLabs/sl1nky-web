import { type Metadata } from "@/sherries/metadata";
import { abi } from "./abi";

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
        contractAddress: "0x2e3b71cf183657582f03c44f35fecf235677c1ed",
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
        contractAddress: "0x2e3b71cf183657582f03c44f35fecf235677c1ed",
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
