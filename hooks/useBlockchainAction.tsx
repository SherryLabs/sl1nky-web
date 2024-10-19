import { BlockchainAction } from '@/sherries/interface/BlockchainAction'
import { useReadContract, useWriteContract } from 'wagmi'

export const useBlockchainAction = ({
  contractABI,
  contractAddress,
  functionName,
  blockchainActionType,
  ...args
}: BlockchainAction) => {
  const { writeContractAsync, error, isError, isPending, isPaused, isSuccess } =
    useWriteContract()

  const address = contractAddress
  const abi = contractABI

  const readContract = useReadContract({
    address,
    abi,
    functionName
  })

  if (blockchainActionType === 'read') {
    const { data, error, isError, isPending, isPaused, isSuccess } =
      readContract

    return {
      data,
      error,
      isError,
      isPending,
      isPaused,
      isSuccess,
      execute: null
    }
  }

  if (blockchainActionType === 'write') {
    const write = async () => {
      try {
        const hash = await writeContractAsync({
          address,
          abi,
          functionName,
          args: [...args.transactionParameters]
        })
        return {
          data: hash,
          isError,
          isPending,
          isPaused,
          isSuccess
        }
      } catch (error) {
        throw error
      }
    }

    return {
      data: null,
      error,
      isError,
      isPending,
      isPaused,
      isSuccess,
      execute: write
    }
  }

  return {
    data: null,
    error,
    isError,
    isPending,
    isPaused,
    isSuccess,
    execute: null
  }
}
