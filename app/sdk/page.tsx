"use client";
import React from "react";
import MiniApp from "../src/components/CardRenderer";
import { metadata } from "@/app/src/metadata";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const SdkPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center gap-4 justify-center w-full p-4 min-h-screen bg-gray-100">
      <ConnectButton />
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        {metadata.map((metadata) => (
          <MiniApp key={metadata.title} metadata={metadata} />
        ))}
      </div>
    </div>
  );
};

export default SdkPage;
