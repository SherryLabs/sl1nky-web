"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { avalancheFuji } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const config = getDefaultConfig({
    appName: "Sherries",
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? "",
    chains: [
      {
        id: 3030,
        name: "SL1",
        nativeCurrency: { 
          decimals: 18, 
          name: "SHERRY", 
          symbol: "SHERRY"
        },
        rpcUrls: { default: { http: ["https://subnets.avax.network/sl1/testnet/rpc"] } },
        testnet: true,
      },
    ],
    ssr: true,
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
