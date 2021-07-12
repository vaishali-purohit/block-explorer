export interface BlockInterface {
  transactions: number;
  miner: string;
  created_date: string;
  merkle_hash: string;
  digest: string;
  parent_digest: string;
  timestamp: string;
  block_number: number;
  reward: number;
  transaction_count: number;
}
