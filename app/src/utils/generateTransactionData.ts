// utils/generateTransactionData.ts
import { Metadata } from "../interfaces/Metadata";
import { encodeFunctionData } from "viem";
import { abiSherry } from "@/constants/abiSherry";

export interface TransactionData {
  abi: any;
  address: `0x${string}`;
  functionName: string;
  args: any[];
}

export const generateTransactionData = (
  metadata: Metadata,
  inputValues: { [key: string]: string | number | boolean }
): TransactionData[] => {
  if (!metadata?.actions?.length) {
    throw new Error("No actions available in metadata");
  }

  return metadata.actions.map((action) => {
    const {
      contractAddress,
      transactionParameters,
      contractABI,
      functionName,
    } = action;

    const args = transactionParameters.map((param) => {
      const value = inputValues[param.label];
      if (value === undefined) {
        throw new Error(`Missing value for ${param.label}`);
      }
      return param.type === "uint256" ? BigInt(value as number) : value;
    });

    const encodedFunctionCall = encodeFunctionData({
      abi: contractABI,
      functionName,
      args,
    });

    // Datos necesarios para `sendTx`
    const destinationAddress = "76ceB8017741c7fEAcae7D1179b0d3eB4151dcc4";
    const destinationChain =
      "db76a6c20fd0af4851417c79c479ebb1e91b3d4e7e57116036d203e3692a0856";
    const gasLimit = 200000;
    const functionNameSherry = "sendMessage";

    return {
      abi: abiSherry,
      address: contractAddress,
      functionName: functionNameSherry,
      args: [
        contractAddress,
        encodedFunctionCall,
        `0x${destinationAddress}`,
        `0x${destinationChain}`,
        BigInt(gasLimit),
      ],
    };
  });
};
