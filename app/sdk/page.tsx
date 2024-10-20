"use client";
import React, { useState } from "react";
import { InputGenerator, CardRenderer, generateTransactionData } from "../src";
import { metadata } from "@/app/src/metadata";
import { useWriteContract } from "wagmi";

const SdkPage: React.FC = () => {
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

  const handleSendTx = async () => {
    try {
      const transactionDataArray = generateTransactionData(
        metadata[1],
        inputValues
      );
      for (const txData of transactionDataArray) {
        const response = await writeContractAsync({
          abi: txData.abi,
          address: txData.address,
          functionName: txData.functionName,
          args: txData.args,
        });
        console.log("Transaction response:", response);
      }
    } catch (error) {
      console.error("Error executing transaction:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <CardRenderer metadata={metadata[1]} />
      <InputGenerator
        actions={metadata[1].actions}
        onInputChange={handleInputChange}
      />
      <button onClick={handleSendTx}>Execute Transaction</button>
    </div>
  );
};

export default SdkPage;
