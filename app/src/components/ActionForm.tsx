// components/ActionForm.tsx
import React, { useState } from 'react';
import { ActionInput } from './ActionInput';
import { generateTransactionData } from '../utils/generateTransactionData';
import { BlockchainAction, Metadata } from '../interfaces';
import { useWriteContract } from 'wagmi';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface ActionFormProps {
  action: BlockchainAction;
}

const ActionForm: React.FC<ActionFormProps> = ({ action }) => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string | number | boolean }>({});
  const { writeContractAsync } = useWriteContract();

  const handleInputChange = (label: string, value: string | number | boolean) => {
    setInputValues((prevValues) => ({ ...prevValues, [label]: value }));
  };
  const [txData, setTxData] = useState("");

  const handleSendTx = async () => {
    try {
      // Crear un objeto Metadata temporal con la acción actual
      const tempMetadata: Metadata<'action'> = {
        type: 'action',
        icon: '',
        title: '',
        description: '',
        label: '',
        disabled: false,
        actions: [action],
      };
      const transactionDataArray = generateTransactionData(tempMetadata, inputValues);
      const txData = transactionDataArray[0]; // Solo hay una acción, así que tomamos el primer elemento
      const response = await writeContractAsync({
        abi: txData.abi,
        address: txData.address,
        functionName: txData.functionName,
        args: txData.args,
      });
      setTxData(response);
      console.log("Transaction response:", response);
    } catch (error) {
      console.error('Error executing transaction:', error);
    }
  };

  return (
    <Card className="flex flex-col items-center justify-center w-full max-w-[352px] p-4 border-none shadow-none gap-2">
      <ActionInput action={action} onInputChange={handleInputChange} />
      <Button variant="default" onClick={handleSendTx}>
        {action.label}
      </Button>
      {txData && <p className="text-sm text-green-500 font-medium break-all">{txData}</p>}
    </Card>
  );
};

export default ActionForm;
