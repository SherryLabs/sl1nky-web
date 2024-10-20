import { type Metadata } from "@/sherries/metadata";
import { abi } from "./abi";

export const metadata: Metadata[] = [
  {
    type: 'action',
    icon: 'https://example.com/icon.png',
    title: 'My Miniapp',
    description: 'This is a test miniapp - please ignore',
    label: 'Test App',
    disabled: false,
    actions: [
      {
        label: 'Execute Action',
        contractAddress: '0x1234567890abcdef1234567890abcdef12345678',
        contractABI: [
          {
            inputs: [
              {
                internalType: 'uint256',
                name: 'Edad',
                type: 'uint256'
              },
              {
                internalType: 'address',
                name: 'Address',
                type: 'address'
              }
            ],
            name: 'sendMessage',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          }
        ],
        transactionParameters: [
          { label: 'Edad', type: 'uint256', value: BigInt(42) },
          {
            label: 'Address',
            type: 'string',
            value: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
          }
        ],
        blockchainActionType: 'write',
        functionName: 'sendMessage',
        chainId: 'Ethereum'
      }
    ]
  },
];
