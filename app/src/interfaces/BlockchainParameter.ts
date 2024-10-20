export interface BlockchainParameter {
    label: string;
    type: "string" | "uint256" | "boolean";
    value?: string | bigint | boolean;
  }