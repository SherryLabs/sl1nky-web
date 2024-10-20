// #region IMPORTS

// Types and interfaces
import { type ActionButtonProps } from '@/sherries/interface/Components'

// Modules and main functions
import { injected } from 'wagmi/connectors'
import { useBlockchainAction } from '@/hooks/useBlockchainAction'
import { useAccount, useConnect } from 'wagmi'

// Components
import { Button } from '@/components/ui/button'

// #region COMPONENT
export const ActionButton = ({
  label,
  data,
  blockchainAction,
  variant
}: ActionButtonProps): JSX.Element => {

  const { isConnected } = useAccount()
  const { connect } = useConnect()

  const { isPending, isError, error, execute } =
    useBlockchainAction({...blockchainAction, data})

  const handleClick = async () => {
    if (!isConnected) {
      await connect({ connector: injected() })
    }
    if (execute) {
      await execute()
    }
  }

  // #region RETURN
  return (
    <Button
      variant={variant}
      onClick={handleClick}
      disabled={isPending || !execute}
      className='w-full rounded-full whitespace-normal break-words'
    >
      {isPending ? 'Ejecutando...' : label}
      {isError && <span>Error: {error?.message}</span>}
    </Button>
  )
}
