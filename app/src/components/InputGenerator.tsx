// components/InputGenerator.tsx
import React from "react";
import { BlockchainAction } from "../interfaces/BlockchainAction";

interface InputGeneratorProps {
  actions: BlockchainAction[];
  onInputChange: (label: string, value: string | number | boolean) => void;
  className?: string;
}

const InputGenerator: React.FC<InputGeneratorProps> = ({ actions, onInputChange, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      {actions.map((action, actionIndex) => (
        <div key={actionIndex}>
          <h3>{action.functionName}</h3>
          {action.transactionParameters.map((param, paramIndex) => (
            <div key={paramIndex}>
              <label>{param.label}</label>
              {param.type === "string" && (
                <input
                  type="text"
                  onChange={(e) => onInputChange(param.label, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              )}
              {param.type === "uint256" && (
                <input
                  type="number"
                  onChange={(e) => onInputChange(param.label, Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              )}
              {param.type === "boolean" && (
                <input
                  type="checkbox"
                  onChange={(e) => onInputChange(param.label, e.target.checked)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InputGenerator;
