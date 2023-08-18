"use client";
import { ConnectButton, WalletKitProvider } from "@mysten/wallet-kit";

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WalletKitProvider
      enableUnsafeBurner={process.env.NODE_ENV === "development"}
    >
      <ConnectButton />
      {children}
    </WalletKitProvider>
  );
}
