import { MetamaskCryptoPayStatus } from '@utils/metamaskUtils';

export interface IMetamaskData {
  data: any;
  gas: any;
  to: any;
  value: any;
  tokenId?: any;
  packId?: any;
}

export interface ICryptoPurchase {
  status: MetamaskCryptoPayStatus;
  data?: IMetamaskData;
}
