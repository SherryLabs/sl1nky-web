import { type Metadata } from "./interfaces/Metadata";
import { abi } from "@/constants/abi";

export const validMetadata: Metadata<'action'>[] = [ {
    type: "action",
    icon: "https://plus.unsplash.com/premium_vector-1720931652710-7bfbe41ae29a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Secure Transaction ",
    description: "Ensure all your transactions are encrypted and safe.",
    label: "Security2",
    disabled: false,
    actions: [
      {
        label: "Set Greeting",
        contractAddress: "0x212b6dAC5cB691Bc4AD5228627BC3A1Ab4C7A5b6",
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
    ],
  },
]