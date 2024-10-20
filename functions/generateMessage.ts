import { Metadata } from "@/sherries/metadata";
import { BlockchainAction } from "@/sherries/interface/BlockchainAction";
import { encodeFunctionData } from "viem";
import { abiSherry } from "@/constants/abiSherry";
export const generateMessageObjectsFromMetadata = (
  metadataObject: Metadata,
  inputValues: { [key: string]: string | number | boolean }
) => {
  if (!metadataObject || !metadataObject.actions) {
    throw new Error("No actions available in metadata");
  }

  return metadataObject.actions.map((actionDetail: BlockchainAction) => {
    const {
      contractAddress,
      transactionParameters,
      contractABI,
      functionName,
    } = actionDetail;

    const destinationAddress = "76ceB8017741c7fEAcae7D1179b0d3eB4151dcc4";
    const destinationChain =
      "db76a6c20fd0af4851417c79c479ebb1e91b3d4e7e57116036d203e3692a0856";
    const gasLimit = 200000;
    const functionNameSherry = "sendMessage";

    const args = transactionParameters.map((param) => {
      const value = inputValues[param.label];
      if (value === undefined) {
        throw new Error(`Missing value for ${param.label}`);
      }
      return param.type === "uint256" ? BigInt(value) : value;
    });

    const encodedFunctionCall = encodeFunctionData({
      abi: contractABI,
      functionName,
      args,
    });

    return {
      _destinationContract: contractAddress,
      _encodedFunctionCall: encodedFunctionCall,
      abi: abiSherry,
      functionName: functionName,
      _destinationAddress: destinationAddress,
      _destinationChain: destinationChain,
      _gasLimit: gasLimit,
      _functionNameSherry: functionNameSherry,
    };

  });
};
