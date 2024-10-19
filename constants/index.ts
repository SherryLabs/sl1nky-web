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
        type: "blockchain-write",
        label: "Sign Transaction",
        href: "/transactions/sign",
        blockchainActions: [
          {
            type: "blockchain-write",
            label: "Set Greeting",
            href: "/transactions/set-greeting",
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
          },
          {
            type: "blockchain-write",
            label: "Set Counter",
            href: "/transactions/set-counter",
            contractAddress: "0x2e3b71cf183657582f03c44f35fecf235677c1ed",
            contractABI: abi,
            transactionParameters: [
              {
                type: "unit256",
                label: "_counter",
              },
            ],
            blockchainActionType: "write",
            functionName: "setCounter",
          },
        ],
      },
    ],
  },
  {
    type: "action",
    icon: "https://plus.unsplash.com/premium_vector-1719933451135-2e669cc24fca?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Real Estate Deals",
    description: "Access the latest trusted real estate opportunities.",
    label: "Opportunities",
    disabled: false,
    actions: [
      {
        type: "blockchain-write",
        label: "Track Investments",
        href: "/investments/track",
        blockchainActions: [
          {
            type: "blockchain-write",
            label: "Set Counter",
            href: "/transactions/set-counter",
            contractAddress: "0x2e3b71cf183657582f03c44f35fecf235677c1ed",
            contractABI: abi,
            transactionParameters: [
              {
                type: "unit256",
                label: "_counter",
              },
            ],
            blockchainActionType: "write",
            functionName: "setCounter",
          },
        ],
      },
    ],
  },
  {
    type: "action",
    icon: "https://plus.unsplash.com/premium_vector-1683134555174-6a149b8c4c37?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Build Trust",
    description: "Improve your trust score to access better deals.",
    label: "Trust",
    disabled: true,
    actions: [
      {
        type: "blockchain-read",
        label: "Check Score",
        href: "/trust/score",
        blockchainActions: [
          {
            type: "blockchain-read",
            label: "Get Greeting",
            href: "/transactions/get-greeting",
            contractAddress: "0x2e3b71cf183657582f03c44f35fecf235677c1ed",
            contractABI: abi,
            transactionParameters: [],
            blockchainActionType: "read",
            functionName: "s_greeting",
          },
        ],
      },
    ],
  },
  {
    type: "action",
    icon: "https://plus.unsplash.com/premium_vector-1683141323401-9d48aa8daea1?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ownership Verification",
    description: "Verify the ownership of real estate properties instantly.",
    label: "Verification",
    disabled: false,
    actions: [
      {
        type: "blockchain-read",
        label: "View Ownership History",
        href: "/ownership/history",
        blockchainActions: [
          {
            type: "blockchain-read",
            label: "Get Counter",
            href: "/transactions/get-counter",
            contractAddress: "0x2e3b71cf183657582f03c44f35fecf235677c1ed",
            contractABI: abi,
            transactionParameters: [],
            blockchainActionType: "read",
            functionName: "s_counter",
          },
        ],
      },
    ],
  },
];
