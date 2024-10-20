"use client";
import React, { useState } from "react";
import { createMetadata, generateTransactionData } from "slinky-sdk";
import { validMetadata } from "@/app/src/meta";

export default function GenerateMessageForm() {
  // const data = createMetadata(metadata[1]);
  const values = {
    _greeting: "Hello, World!",
  }

  console.log(values);
  const inputs = generateTransactionData({
   metadata: validMetadata[0],
   values,
  });
  //console.log(data);
  console.log(inputs);
  return (
    <div>
      <h1>Encode</h1>
    </div>
  );
}
