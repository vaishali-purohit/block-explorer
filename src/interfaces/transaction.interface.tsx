export interface TransactionInterface {
  digest: string;
  contract: string;
  sender: string;
  action: string;
  block: string;
  fee: number;
  charge_rate: number;
  charge_limit: number;
  valid_from: number;
  valid_until: number;
  created_date: string;
  status: string;
  block_number: number;
}
