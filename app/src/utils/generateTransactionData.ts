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
    const receiverTeleporter = "76c3cF8521b5B1cfddF6c17E7bBe1d3f4dC9Ee14";
    const destinationChain =
      "9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7";
    const gasLimit = 200000;
    const functionNameSherry = "sendMessage";
    const teleporterSender = "0x59c80C541F6c065fb56EF25F87b1Fa8b58BEFaC1";

    return {
      abi: abiSherry,
      address: teleporterSender,
      functionName: functionNameSherry,
      args: [
        contractAddress, // Contrato arbitrario
        encodedFunctionCall, // Encoded function call
        `0x${receiverTeleporter}`, // Receiver teleporter
        `0x${destinationChain}`, // ID de la cadena de destino
        BigInt(gasLimit), // Límite de gas
      ],
    };
  });
};
