// components/CardRenderer.tsx
import React from "react";
import { Metadata } from "../interfaces/Metadata";

interface CardRendererProps {
  metadata: Metadata;
  className?: string;
}

const CardRenderer: React.FC<CardRendererProps> = ({ metadata, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full max-w-[352px] p-4 ${className}`}>
      <img src={metadata.icon} alt={metadata.title} />
      <h2>{metadata.title}</h2>
      <p>{metadata.description}</p>
    </div>
  );
};

export default CardRenderer;
