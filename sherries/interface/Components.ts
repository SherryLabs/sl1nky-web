import { type VariantProps } from 'class-variance-authority'
import { type buttonVariants } from '@/components/ui/button'
import { type BlockchainAction } from '@/sherries/interface/BlockchainAction'

export interface ActionButtonProps {
  label: string
  data: any
  blockchainAction: BlockchainAction
  variant?: VariantProps<typeof buttonVariants>['variant']
}
