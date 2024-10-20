
export interface BlockchainAction {
  label: string;
  contractAddress: `0x${string}`;
  contractABI: any;
  transactionParameters: BlockchainParameter[];
  blockchainActionType: "read" | "write";
  functionName: string;
  chainId: ChainId;
  data?: any;
}

export type BlockchainParameter = {
  label: string;
  type: "string" | "uint256" | "boolean";
  value?: string | bigint | boolean;
};

export interface GeneratedMessage {
  _destinationContract: `0x${string}`;
  _encodedFunctionCall: `0x${string}`;
  abi: any;  
  functionName: string;
}


export type ChainId = "Ethereum" | "Base" | "Optimism";
