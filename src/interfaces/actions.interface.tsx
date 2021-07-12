export interface ActionCall {
  getToken?(username: any, password: any): void;
  getBlockList?(index: number, loader: boolean): void;
  getAccountList?(index: number, loader: boolean): void;
  getContractList?(index: number, loader: boolean): void;
  getTransactionList?(index: number, loader: boolean): void;
  getTransferList?(index: number, loader: boolean): void;
  getTransactionCount?(digest: string, loader: boolean): void;
  getBlockDetail?(id: string, loader: boolean): void;
  getAccountDetail?(id: string, loader: boolean): void;
  getContractDetail?(id: string, loader: boolean): void;
  getContractTransaction?(name: string, loader: boolean): void;
  getTransactionDetail?(digest: string, loader: boolean): void;
  getTransactionTransfer?(digest: string, loader: boolean): void;
  getTransferDetail?(pk: number, loader: boolean): void;
  getAccountTransfer?(address: string, loader: boolean): void;
  getTokenTap?(loader: boolean): void;
  sendToken?(address: string): void;
  sendTokenStatus?(digest: string): void;
  getNetworkTap?(loader: boolean): void;
  setLoading?(name: string): void;
  getNetwork?(name: string, loader: boolean): void;
  showLoader?(): void;
  hideLoader?(): void;
  clearState?(): void;
  getLatestDetails?(loader: boolean): void;
}
