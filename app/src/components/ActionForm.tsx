// components/ActionForm.tsx
import React, { useState } from "react";
import { ActionInput } from "./ActionInput";
import { generateTransactionData } from "../utils/generateTransactionData";
import { BlockchainAction, Metadata } from "../interfaces";
import { useWriteContract } from "wagmi";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { abiccip } from "../abi/abiccip";

interface ActionFormProps {
  action: BlockchainAction;
}

const ActionForm: React.FC<ActionFormProps> = ({ action }) => {
  const [inputValues, setInputValues] = useState<{
    [key: string]: string | number | boolean;
  }>({});
  const { writeContractAsync } = useWriteContract();

  const handleInputChange = (
    label: string,
    value: string | number | boolean
  ) => {
    setInputValues((prevValues) => ({ ...prevValues, [label]: value }));
  };
  const [txData, setTxData] = useState("");
  const [ccipTxData, setCcipTxData] = useState("");

  const handleSendTx = async () => {
    try {
      // Crear un objeto Metadata temporal con la acción actual
      const tempMetadata: Metadata<"action"> = {
        type: "action",
        icon: "",
        title: "",
        description: "",
        label: "",
        disabled: false,
        actions: [action],
      };
      const transactionDataArray = generateTransactionData(
        tempMetadata,
        inputValues
      );
      const txData = transactionDataArray[0];
      const response = await writeContractAsync({
        abi: txData.abi,
        address: txData.address,
        functionName: txData.functionName,
        args: txData.args,
      });
      setTxData(response);
      console.log("Transaction response:", response);
    } catch (error) {
      console.error("Error executing transaction:", error);
    }
  };

  const handleCCIPSend = async () => {
    try {
      const response = await writeContractAsync({
        abi: abiccip,
        address: "0xc88636a35047cF10E74036DB8BD444Fe3eA276BD",
        functionName: "transferUSDC",
        args: [
          "0x5ee75a1B1648C023e885E58bD3735Ae273f2cc52",
          "0x5425890298aed601595a70ab815c96711a31bc65",
          BigInt(10000),
        ],
      });
      setCcipTxData(response);
      console.log("CCIP Send", response);
    } catch (error) {
      console.error("Error executing CCIP Send:", error);
    }
  };

  return (
    <Card className="flex flex-col items-center justify-center w-full max-w-[352px] p-4 border-none shadow-none gap-2">
      <ActionInput action={action} onInputChange={handleInputChange} />
      <Button
        variant="default"
        onClick={action.label === "CCIP Send" ? handleCCIPSend : handleSendTx}
      >
        {action.label}
      </Button>
      {txData && (
        <p className="text-sm text-green-500 font-medium break-all">{txData}</p>
      )}
      {ccipTxData && (
        <p className="text-sm text-green-500 font-medium break-all">
          {ccipTxData}
        </p>
      )}
    </Card>
  );
};

export default ActionForm;
