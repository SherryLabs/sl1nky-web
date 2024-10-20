"use client";
import React, { useState } from "react";
import { generateMessageObjectsFromMetadata } from "@/functions/generateMessage";
import { getTransactionParameters } from "@/functions/generateParameters";
import { useWriteContract } from "wagmi";
import { metadata } from "@/constants";

export default function GenerateMessageForm() {
  const { writeContractAsync } = useWriteContract();
  const [inputValues, setInputValues] = useState<{
    [key: string]: string | number | boolean;
  }>({});

  const handleInputChange = (
    label: string,
    value: string | number | boolean
  ) => {
    setInputValues({ ...inputValues, [label]: value });
  };

  const sendTx = async () => {
    const messageObjects = generateMessageObjectsFromMetadata(
      metadata[0],
      inputValues
    );
    if (messageObjects.length > 0) {
      const firstMessage = messageObjects[0];
      const resp = await writeContractAsync({
        abi: firstMessage.abi,
        address: firstMessage._destinationContract,
        functionName: firstMessage._functionNameSherry,
        args: [
          firstMessage._destinationContract,
          firstMessage._encodedFunctionCall,
          `0x${firstMessage._destinationAddress}`,
          `0x${firstMessage._destinationChain}`,
          BigInt(firstMessage._gasLimit),
        ],
      });
      console.log("writeContract", resp);
    } else {
      console.log("No message objects available");
    }
  };

  const metadataObject = metadata[0];

  if (!metadataObject || !metadataObject.actions) {
    return <div>No actions available</div>;
  }

  return (
    <div>
      {metadataObject.actions.map((actionDetail, index) => (
        <div key={index}>
          <h3>{actionDetail.functionName}</h3>
          {getTransactionParameters(actionDetail).map((param, paramIndex) => (
            <div key={paramIndex}>
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
          ))}
        </div>
      ))}
      <button onClick={sendTx}>Execute Transaction</button>
    </div>
  );
}
