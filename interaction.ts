import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log("connected")

const address = new PublicKey("3wxejPJaoAp9KMKN29TPGTpoEo7nkUobv1yRhBXyH61T")
const balance = await connection.getBalance(address)
console.log(balance / LAMPORTS_PER_SOL)