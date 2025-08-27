import { PublicKey, Connection } from "@solana/web3.js";

export const SOLAY_TOKEN_MINT = new PublicKey("P7rFSsngQyDaJb3fqDP49XJBz2qLnVkLxdD9yt4Yray");

export async function getTokenBalance(connection: Connection, wallet: PublicKey) {
  const accounts = await connection.getTokenAccountsByOwner(wallet, { mint: SOLAY_TOKEN_MINT });
  if (accounts.value.length === 0) return 0;
  const balanceData = accounts.value[0].account.data;
  // @ts-ignore
  const balance = balanceData.parsed.info.tokenAmount.uiAmount;
  return balance || 0;
}
