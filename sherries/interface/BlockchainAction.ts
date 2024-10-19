import { LinkedAction } from "../metadata";

export interface BlockchainAction extends LinkedAction {
  /** Address of the smart contract */
  contractAddress: string;
  /** ABI of the smart contract */
  contractABI: any;
  /** Parameters for the blockchain transaction */
  transactionParameters: BlockchainParameter[];
  /** Type of blockchain action: 'read' or 'write' */
  blockchainActionType: "read" | "write";
  /** Function name of the smart contract */
  functionName: string;
  /** Function signature of the smart contract */
  functionSignature?: string;
  chainId: number;
}

export type BlockchainParameter = {
  type: "string" | "unit256" | "boolean";
  label: string;
};
