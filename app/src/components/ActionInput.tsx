// components/ActionInput.tsx
import React from "react";
import { BlockchainAction } from "../interfaces";
import { Input } from "./ui/input";

interface ActionInputProps {
  action: BlockchainAction;
  onInputChange: (label: string, value: string | number | boolean) => void;
}

export const ActionInput: React.FC<ActionInputProps> = ({
  action,
  onInputChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {action.transactionParameters.map((param, index) => (
        <div key={index}>
          <p className="text-sm font-medium">{param.label}</p>
          {param.type === "string" && (
            <Input
              type="text"
              onChange={(e) => onInputChange(param.label, e.target.value)}
            />
          )}
          {param.type === "uint256" && (
            <Input
              type="number"
              onChange={(e) =>
                onInputChange(param.label, Number(e.target.value))
              }
            />
          )}
          {param.type === "boolean" && (
            <Input
              type="checkbox"
              onChange={(e) => onInputChange(param.label, e.target.checked)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
