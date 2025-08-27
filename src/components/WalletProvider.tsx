import React, { FC, ReactNode } from "react";
import { ConnectionProvider, WalletProvider as SolWalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const network = WalletAdapterNetwork.Mainnet;
const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network })];

export const WalletProvider: FC<{children: ReactNode}> = ({ children }) => (
  <ConnectionProvider endpoint="https://api.mainnet-beta.solana.com">
    <SolWalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>{children}</WalletModalProvider>
    </SolWalletProvider>
  </ConnectionProvider>
);
