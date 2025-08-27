import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection } from "@solana/web3.js";
import { getTokenBalance } from "../solana/utils";

type HandResult = "Win" | "Lose";

export default function MiniPoker() {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState<number>(0);
  const [bet, setBet] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [cards, setCards] = useState<string[]>(["🂠","🂠","🂠"]);

  const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

  useEffect(() => {
    if (publicKey && connected) {
      (async () => {
        const b = await getTokenBalance(connection, publicKey);
        setBalance(b);
      })();
    }
  }, [publicKey, connected]);

  function drawCards(): string[] {
    const suits = ["♠️","♥️","♣️","♦️"];
    const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    return Array(3).fill(0).map(() => `${values[Math.floor(Math.random()*values.length)]}${suits[Math.floor(Math.random()*suits.length)]}`);
  }

  function playPoker() {
    if (bet > balance) return setMessage("Insufficient balance");
    const outcome: HandResult = Math.random() > 0.5 ? "Win" : "Lose";
    let newBalance = balance;
    if (outcome === "Win") newBalance += bet;
    else newBalance -= bet;
    setBalance(newBalance);
    setCards(drawCards());
    setMessage(`You ${outcome}! New simulated balance: ${newBalance}`);
  }

  return (
    <div className="card">
      <h3>Mini Poker</h3>
      <p>Balance: {balance}</p>
      <div className="cards">{cards.map((c,i)=><span key={i} className="card-face">{c}</span>)}</div>
      <input type="number" min={1} max={balance} value={bet} onChange={(e)=>setBet(Number(e.target.value))}/>
      <button onClick={playPoker} disabled={!connected || balance<=0}>Play</button>
      <p>{message}</p>
      <p><small>⚠️ Simulated: no tokens are transferred</small></p>
    </div>
  );
}
