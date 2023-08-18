"use client";

import React, { useEffect, useState } from "react";
import "./about.css";
import { useCounter } from "../hooks/useCounter";
import { useWalletKit } from "@mysten/wallet-kit";

const Page = () => {
  const { currentAccount } = useWalletKit();
  const { counter, increment, decrement, reset } = useCounter();

  // rendering
  return (
    <div>
      <h1 className="text-red-400">Counter</h1>
      <p>Current count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <div>{currentAccount?.address}</div>
    </div>
  );
};

export default Page;
