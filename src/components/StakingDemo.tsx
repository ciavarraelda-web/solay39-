import React, { useState } from "react";

export default function StakingDemo() {
  const [staked, setStaked] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  const [reward, setReward] = useState<number>(0);

  function stake() {
    setStaked(staked + input);
    setReward(reward + input*0.05); // 5% reward demo
    setInput(0);
  }

  return (
    <div className="card">
      <h3>Staking Demo</h3>
      <p>Staked: {staked} tokens</p>
      <p>Pending reward: {reward.toFixed(2)} tokens</p>
      <input type="number" min={1} value={input} onChange={(e)=>setInput(Number(e.target.value))}/>
      <button onClick={stake}>Stake</button>
    </div>
  );
}
