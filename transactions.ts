import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL, Transaction, Keypair, SystemProgram, sendAndConfirmRawTransaction, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
var amount = 0.1
const keypair = getKeypairFromEnvironment("SECRET_KEY")
const pubkey = keypair.publicKey
const pubkey2 = new PublicKey("3DmWamBo6YdtkckSXi7MFJXjCgZEbNRQMaUsvMmUzv7d")
const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: pubkey,
    toPubkey: pubkey2,
    lamports: LAMPORTS_PER_SOL * amount
})

transaction.add(sendSolInstruction)

const signature = await sendAndConfirmTransaction(connection, transaction, [
    keypair,
])

console.log(signature)




