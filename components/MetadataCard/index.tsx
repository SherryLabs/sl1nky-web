'use client'
// #region IMPORTS

// Types and interfaces
import { type Metadata } from '@/sherries/metadata'

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ActionButton } from '@/components/ActionButton'

// #region COMPONENT
export function MetadataCard ({
  icon,
  title,
  description,
  label,
  links
}: Metadata): JSX.Element {
  return (
    <Card className='w-full max-w-[350px] min-h-full rounded-2xl shadow-lg hover:shadow-2xl'>
      <CardHeader className='relative min-w-[250px] w-[350px] h-[250px] !p-0 rounded-t-2xl'>
        <Image
          src={icon}
          alt={title}
          fill
          className='object-cover object-center  rounded-t-2xl'
        />
        {label && (
          <Badge className='absolute top-2 right-3 bg-pink-500'>{label}</Badge>
        )}
      </CardHeader>
      <CardContent className='p-5 min-w-full flex flex-col justify-start items-start gap-2'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className='flex flex-row justify-between items-center gap-2 min-w-full flex-wrap p-5'>
        {links?.actions?.map(({ label, blockchainActions }, index) => {
          if (blockchainActions !== undefined) {
            return (
              <ActionButton
                key={index}
                label={label}
                blockchainAction={blockchainActions[0]}
                variant={index === 0 ? 'default' : 'outline'}
              />
            )
          }
          return null // Asegúrate de manejar el caso donde blockchainActions es undefined
        })}
      </CardFooter>
    </Card>
  )
}
