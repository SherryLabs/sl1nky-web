import { BlockchainAction } from "@/sherries/interface/BlockchainAction";
import { createMetadata } from "slinky-sdk";
import { useReadContract, useWriteContract } from "wagmi";
import { generateTransactionData } from "slinky-sdk";
import { validMetadata } from "@/app/src/meta";

export const useBlockchainAction = ({
  contractABI,
  contractAddress,
  functionName,
  blockchainActionType,
  ...args
}: BlockchainAction) => {
  const values = {
    Edad: BigInt(42),
    Address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  };

  console.log(values);
  const data = generateTransactionData({
    metadata: validMetadata[0],
    values,
  });

  // console.log(newArgs);
  const { writeContractAsync, error, isError, isPending, isPaused, isSuccess } =
    useWriteContract();

  const address = contractAddress;
  const abi = [
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

  const readContract = useReadContract({
    address,
    abi,
    functionName,
  });

  if (blockchainActionType === "read") {
    const { data, error, isError, isPending, isPaused, isSuccess } =
      readContract;

    return {
      data,
      error,
      isError,
      isPending,
      isPaused,
      isSuccess,
      execute: null,
    };
  }

  if (blockchainActionType === "write") {
    const write = async () => {
      console.log(data);
      console.log({
        address: data[0].destinationAddress,
        abi: data[0].abi,
        functionName: data[0].functionName,
        args: data[0].args,
      });
      try {
        const hash = await writeContractAsync({
          address: data[0].address,
          abi: data[0].abi,
          functionName: data[0].functionName,
          args: data[0].args,
        });
        console.log(hash);
        return {
          data: hash,
          isError,
          isPending,
          isPaused,
          isSuccess,
        };

      } catch (error) {
        throw error;
      }
    };

    return {
      data: null,
      error,
      isError,
      isPending,
      isPaused,
      isSuccess,
      execute: write,
    };
  }

  return {
    data: null,
    error,
    isError,
    isPending,
    isPaused,
    isSuccess,
    execute: null,
  };
};
