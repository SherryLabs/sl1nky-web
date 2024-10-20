import { BlockchainAction, BlockchainParameter } from "@/sherries/interface/BlockchainAction";

export const getTransactionParameters = (actionDetail: BlockchainAction) => {
  return actionDetail.transactionParameters;
};
