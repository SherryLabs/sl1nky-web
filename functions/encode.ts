import { AbiCoder } from "ethers";
import { hexlify, zeroPad } from "@ethersproject/bytes";
import { Metadata } from "@/sherries/metadata";
import {
  BlockchainAction,
  BlockchainParameter,
} from "@/sherries/interface/BlockchainAction";
import { encodeFunctionData } from 'viem'

export function generateMessageObjectsFromMetadata(metadataObject: Metadata) {
  const abiCoder = new AbiCoder(); 

  return metadataObject.actions?.map((actionDetail: BlockchainAction) => {
    const { contractAddress, transactionParameters, chainId } = actionDetail;
    const destinationChain = zeroPad(hexlify(chainId), 32);


    const paramsEncoded = abiCoder.encode(
      transactionParameters.map((param: BlockchainParameter) => param.type), 
      transactionParameters.map((param: BlockchainParameter) => param.label)
    );

    return {
      _destinationContract: contractAddress, 
      _params: paramsEncoded, 
      _destinationChain: destinationChain,
      _gasLimit: 2000000, 
    };
  });
}
