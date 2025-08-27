import React from "react";
import { WalletProvider } from "./components/WalletProvider";
import Header from "./components/Header";
import MiniPoker from "./components/MiniPoker";
import StakingDemo from "./components/StakingDemo";
import NFTSection from "./components/NFTSection";
import Roadmap from "./components/Roadmap";

export default function App() {
  return (
    <WalletProvider>
      <div className="app">
        <Header />
        <main>
          <MiniPoker />
          <StakingDemo />
          <NFTSection />
          <Roadmap />
        </main>
        <footer>
          <p>Solay39 token: <a href="https://raydium.io/launchpad/token/?mint=P7rFSsngQyDaJb3fqDP49XJBz2qLnVkLxdD9yt4Yray" target="_blank">Buy here</a></p>
          <p>Usage: staking, NFT access, mini games and rewards for token holders.</p>
        </footer>
      </div>
    </WalletProvider>
  );
}
