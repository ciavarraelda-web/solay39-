import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import logo from "../public/logo-solay39.png";

export default function Header() {
  const { connected, publicKey, wallet } = useWallet();
  return (
    <header className="header">
      <img src={logo} alt="Solay39" className="logo"/>
      <h1>Solay39 NFT Launchpad & Mini Poker</h1>
      {connected ? <p>Wallet: {publicKey?.toBase58().slice(0, 6)}...{publicKey?.toBase58().slice(-6)}</p> : <p>Connect your wallet</p>}
    </header>
  );
}
