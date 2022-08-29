import { toast } from 'react-toastify';

import { $apiWithToken } from '@services/index';
import { ethers } from 'ethers';

function handleMetamaskError(error) {
  if (error.code === 4001)
    return toast.warn('Connect request was rejected by user');
  if (error?.message) return toast.error(error.message);
  return toast.error('Metamask: something went wrong.');
}

export function formatAddress(address = '') {
  const start = address.substring(0, 5);
  const end = address.substring(address.length - 4);
  return `${start}...${end}`;
}

export function checkMetamaskInstallation() {
  if (!window.ethereum) {
    toast.error('Metamask is not installed');
    setTimeout(
      () => window.open('https://metamask.io/download/', '_blank'),
      2000
    );
    return false;
  }
  return true;
}

export async function _checkMetamaskConnected({ provider }) {
  return provider
    .send('eth_requestAccounts', [])
    .then(() => true)
    .catch((error) => {
      handleMetamaskError(error);
      return false;
    });
}

export async function switchNetwork(chainId): Promise<boolean> {
  if (!window.ethereum) {
    toast.error('Metamask is not connected!');
    return false;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  try {
    await provider.send('wallet_switchEthereumChain', [
      { chainId: ethers.utils.hexValue(+chainId) },
    ]);
    return true;
  } catch (err) {
    toast.error('Connect is rejected by user');
    return false;
  }
}

export async function _changeNetwork({ provider, name, chainId }) {
  const networkConfirm = confirm(
    `In order to trade items, please switch to ${name} network within your MetaMask wallet.`
  );
  //TODO: add network confirm modal
  if (networkConfirm) {
    return provider
      .send('wallet_switchEthereumChain', [
        { chainId: ethers.utils.hexValue(+chainId) },
      ])
      .then((res) => res === null)
      .catch(() => {
        toast.warn('Connect request was rejected by user');
        return false;
      });
  } else {
    toast.warn('Connect request was rejected by user');
    return false;
  }
}

export function getAddressFromMetamask() {
  return window.ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((res: string[]) => res[0])
    .catch((err) => console.log(err));
}

export enum UtilityStatus {
  activatable = 'ACTIVATABLE',
  redeemable = 'REDEEMABLE',
}

export enum MetamaskConnectStatus {
  READY = 'READY',
  NEED_CHANGE_NETWORK = 'NEED_CHANGE_NETWORK',
  NOT_INSTALLED = 'NOT_INSTALLED',
  NOT_CONNECTED = 'NOT_CONNECTED',
  ADRESS_ABSENT = 'ADDRESS_ABSENT',
  ADDRESS_DONT_MATCH = 'ADDRESS_DONT_MATCH',
  REJECTED_BY_USER = 'REJECTED_BY_USER',
  SOMETHING_WRONG = 'SOMETHING_WRONG',
}

export enum MetamaskCryptoPayStatus {
  SUCCESS = 'SUCCESS',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  PURCHASE_FAILED = 'PURCHASE_FAILED',
  SOMETHING_WRONG = 'SOMETHING_WRONG',
}

export function isRedeemDataCorrect(token) {
  if (!token) return false;
  const { id, utilityStatus } = token;
  if (!id || !utilityStatus) return false;
  if (utilityStatus === UtilityStatus.activatable) return true;
  if (utilityStatus === UtilityStatus.redeemable) return true;
  return false;
}

export async function getMetamaskData(token) {
  return $apiWithToken
    .get(`collections/nft-redeem/${token.id}`)
    .then(({ data }) => data)
    .catch((error) => {
      const message = error?.response?.data?.message;
      if (message === 'Insufficient funds') {
        toast.error('Insufficient funds');
      } else {
        toast.error('Crypto purchase faild');
      }
      return false;
    });
}

export async function checkGas({ provider, transactionParameters }) {
  return provider
    .send('eth_estimateGas', [transactionParameters])
    .then(() => true)
    .catch((error) => {
      handleMetamaskError(error);
      return false;
    });
}

export async function sendTransaction({ provider, transactionParameters }) {
  return provider
    .send('eth_sendTransaction', [transactionParameters])
    .then((transactionHash) => {
      if (!transactionHash) {
        toast.error('Crypto purchase faild');
        return false;
      }
      return transactionHash;
    })
    .catch((error) => {
      handleMetamaskError(error);
      return false;
    });
}

export async function completeRedeem({ redeem, transactionHash }) {
  return $apiWithToken
    .post('/collections/nft-redeem-complete', {
      tokenId: redeem.id,
      transactionHash,
    })
    .then((completed) => {
      if (!completed) {
        toast.error('Crypto purchase faild');
        return false;
      }
      return true;
    })
    .catch((error) => {
      toast.error('Crypto purchase faild');
      return false;
    });
}

export function getAddressDontMatchErrorMessage(address) {
  return `Wrong Metamask account! Activate account ${formatAddress(
    address
  )} first, or go to Profile -> My Wallet and your current account will be linked instead`;
}

export enum CryptoPaymentPossibleErrors {
  addressAbsent = 'Wrong Metamask account! This account has no wallet connected. Please switch to another account',
  rejectedByUser = 'Connection is rejected by user',
  insufficientFunds = 'Insufficient funds! Please use another payment method or switch to another account',
  purchaseFailed = 'Crypto purchase failed! Please try again or use another payment method',
  somethingWrong = 'Metamask error! Please try again or try another payment method',
}
