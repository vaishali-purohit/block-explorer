import { BlockInterface } from "./blocks.interface";
import { TransactionInterface } from "./transaction.interface";
import { HeadingInterface } from "./heading.interface";
import { ContractInterface } from "./contract.interface";
import { AccountInterface } from "./accounts.interface";
import { TransferInterface } from "./transfer.interface";

export interface Props {
  headings: HeadingInterface[];
  emptyText: string;
  rowData:
    | BlockInterface[]
    | TransactionInterface[]
    | ContractInterface[]
    | AccountInterface[]
    | TransferInterface[];
  count: number;
  type: string;
  // getTransactionCount,
  // transactionCount: number
}
