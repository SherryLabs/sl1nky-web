'use client'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { avalancheFuji } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export function Providers ({ children }: { children: React.ReactNode }) {
  const config = getDefaultConfig({
    appName: 'Sherries',
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? '',
    chains: [avalancheFuji],
    ssr: true // If your dApp uses server side rendering (SSR)
  })

  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
