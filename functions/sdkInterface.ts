import { Metadata } from "@/sherries/metadata";
import { BlockchainAction } from "@/sherries/interface/BlockchainAction";
import { generateMessageObjectsFromMetadata, getTransactionParameters } from "./sdk";

// Esta función inicializa toda la metadata y parámetros
export const initializeTransaction = (
  metadataObject: Metadata
) => {
  if (!metadataObject.actions || metadataObject.actions.length === 0) {
    throw new Error("No actions available in metadata");
  }

  const result = generateMessageObjectsFromMetadata(metadataObject, {});
  const action = metadataObject.actions[0]; // Aquí ya estamos seguros de que `actions` no es `undefined`

  return {
    metadata: {
      icon: result.icon,
      title: result.title,
      description: result.description,
      label: result.label,
      disabled: result.disabled,
    },
    parameters: getTransactionParameters(action), // `action` ya no puede ser `undefined`
    messages: result.messages,
  };
};
