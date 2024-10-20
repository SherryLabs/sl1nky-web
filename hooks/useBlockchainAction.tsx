import { BlockchainAction } from "@/sherries/interface/BlockchainAction";
import { createMetadata } from "slinky-sdk";
import { useReadContract, useWriteContract } from "wagmi";

export const useBlockchainAction = ({
  contractABI,
  contractAddress,
  functionName,
  blockchainActionType,
  data,
  ...args
}: BlockchainAction) => {
  const destinationAddress = "0x76ceB8017741c7fEAcae7D1179b0d3eB4151dcc4";
  const destinationChain =
    "db76a6c20fd0af4851417c79c479ebb1e91b3d4e7e57116036d203e3692a0856";
  const gasLimit = 200000;
  const newArgs = [
    data.message[0]._destinationContract,
    data.message[0]._encodedFunctionCall,
    data.message[0]._destinationAddress,
    data?.message[0]._destinationChain,
    gasLimit,
  ];

  console.log(newArgs);
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
      try {
        const hash = await writeContractAsync({
          address: destinationAddress,
          abi,
          functionName:"sendMessage",
          args: newArgs,
        });
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
