import { type Metadata } from "./interfaces/Metadata";
import { abi } from "../../constants/abi";
import { abinft } from "./abi/abinft";
import { abiccip } from "./abi/abiccip";

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
      {
        label: "Set Counter",
        contractAddress: "0x212b6dAC5cB691Bc4AD5228627BC3A1Ab4C7A5b6",
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
  {
    type: "action",
    icon: "https://gunzillagames.com/api/uploads/Website_News_Thumbnail_1_e6001b73ff.jpg",
    title: "Mint NFT",
    description: "Mint a new NFT.",
    label: "NFT",
    disabled: false,
    actions: [
      {
        label: "Safe Mint",
        contractAddress: "0x4A38545e805e62532282b0f04B200019A79a790d",
        contractABI: abinft,
        transactionParameters: [
          {
            type: "string",
            label: "receiver",
          },
        ],
        blockchainActionType: "write",
        functionName: "safeMint",
        chainId: "Ethereum",
      },
    ],
  },
  {
    type: "action",
    icon: "https://miro.medium.com/v2/resize:fit:1400/1*KodmPhOeIBdNwyqFG8uPxg.png",
    title: "CCIP Polygon",
    description: "Send a USDC to another chain.",
    label: "CCIP",
    disabled: false,
    actions: [
      {
        label: "CCIP Send",
        contractAddress: "0xc88636a35047cF10E74036DB8BD444Fe3eA276BD",
        contractABI: abiccip,
        transactionParameters: [
        ],
        blockchainActionType: "write",
        functionName: "transferUSDC",
        chainId: "Ethereum",
      },
    ],
  },
];
