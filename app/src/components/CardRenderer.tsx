// components/Card.tsx
import React from "react";
import { Metadata } from "../interfaces/Metadata";
import { Card as UICard } from "../components/ui/card";
import ActionForm from "./ActionForm";

interface CardProps {
  metadata: Metadata;
  className?: string;
}

const MiniApp: React.FC<CardProps> = ({ metadata, className }) => {
  return (
    <UICard
      className={`flex flex-col items-center text-center justify-center w-full max-w-[352px] p-4 gap-2 ${className}`}
    >
      <img src={metadata.icon} alt={metadata.title} className="rounded-md" />
      <h2 className="text-lg font-bold">{metadata.title}</h2>
      <p className="text-sm text-gray-500">{metadata.description}</p>
      {metadata.actions.map((action, index) => (
        <ActionForm key={index} action={action} />
      ))}
    </UICard>
  );
};

export default MiniApp;
