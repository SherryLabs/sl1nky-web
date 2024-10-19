"use client";

import { Metadata } from "@/sherries/metadata";
import { metadata } from "@/constants";
import {
  BlockchainAction,
  BlockchainParameter,
} from "@/sherries/interface/BlockchainAction";
import { encodeFunctionData } from "viem";
import React, { useState } from "react";
import { useWriteContract } from "wagmi";
import { abi } from "@/constants/abi";

const destinationAddress = "0x6329dDC217c67718F850657dF9E50025aC0c8dba";
const destinationChain =
  "0xdb76a6c20fd0af4851417c79c479ebb1e91b3d4e7e57116036d203e3692a0856";
const gasLimit = 200000;

export default function GenerateMessageForm() {
  const { writeContract } = useWriteContract();

  const [inputValues, setInputValues] = useState<{
    [key: string]: string | number | boolean;
  }>({});

  const handleInputChange = (
    label: string,
    value: string | number | boolean
  ) => {
    setInputValues({ ...inputValues, [label]: value });
  };

  const generateMessageObjectsFromMetadata = (metadataObject: Metadata) => {
    return metadataObject.actions?.map((actionDetail: BlockchainAction) => {
      const {
        contractAddress,
        transactionParameters,
        contractABI,
        functionName,
      } = actionDetail;

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
        _destinationAddress: destinationAddress,
        _destinationChain: destinationChain,
        _gasLimit: gasLimit,
        abi: contractABI,
        functionName: functionName,
      };
    });
  };

  const sendTx = async () => {
    const messageObjects = generateMessageObjectsFromMetadata(metadata[0]);

    if (messageObjects && messageObjects.length > 0) {
      const firstMessage = messageObjects[0];
      console.log(firstMessage);
      await writeContract({
        abi: abi,
        address: firstMessage._destinationContract,
        functionName: firstMessage.functionName,
        args: [
          firstMessage._destinationContract,
          firstMessage._encodedFunctionCall,
          firstMessage._destinationAddress,
          firstMessage._destinationChain,
          firstMessage._gasLimit,
        ], 
      });
    }
    console.log("writeContract", writeContract);
  };

  const metadataObject = metadata[0];

  if (!metadataObject || !metadataObject.actions) {
    return <div>No actions available</div>;
  }

  const handleWriteContract = async () => {
    await writeContract({
      abi,
      address: "0x2e3b71cf183657582f03c44f35fecf235677c1ed",
      functionName: "setGreeting",
      args: ["mensaje"],
    });

    console.log("writeContract", writeContract);
  };

  return (
    <div>
      {metadataObject.actions.map((actionDetail: BlockchainAction, index) => (
        <div key={index}>
          <h3>{actionDetail.functionName}</h3>

          {actionDetail.transactionParameters.map(
            (param: BlockchainParameter) => (
              <div key={param.label}>
                <label>{param.label}</label>

                {param.type === "string" && (
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange(param.label, e.target.value)
                    }
                  />
                )}
                {param.type === "uint256" && (
                  <input
                    type="number"
                    onChange={(e) =>
                      handleInputChange(param.label, Number(e.target.value))
                    }
                  />
                )}
                {param.type === "boolean" && (
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleInputChange(param.label, e.target.checked)
                    }
                  />
                )}
              </div>
            )
          )}
        </div>
      ))}
      <div className="flex gap-2 flex-col">
        <button
          onClick={() => {
            try {
              console.log(generateMessageObjectsFromMetadata(metadataObject));
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Generate Message
        </button>
        <button onClick={sendTx}>Execute Transaction</button>
        <button onClick={handleWriteContract}>handleWriteContract</button>
      </div>
    </div>
  );
}
