// @ts-nocheck
import React from 'react'

import {
	NFT_DETAILS, PACKS_DETAILS, NFT_BUY_OPTIONS, PACKS_BUY_OPTIONS, BUY_CARD, BUY_CRYPTO,
	NFT_PAYMENT_SUCCESS, FAILED_PAYMENT, PRE_CRYPTO_CHECKOUT, INSTALL_WALLET, CONNECT_WALLET,
	CHANGE_WALLET, CHANGE_NETWORK, RESERVATION, RESERVATION_BLOCKED, RESERVED_BY_ANOTHER, ITEM_SOLD,
	RESERVATION_EXPIRED, RESERVATION_IS_NOT_ACTIVE, CRYPTO_CHECKOUT, ADD_NETWORK,
	PACKS_PAYMENT_SUCCESS, PACKS_OPENING_LOADING, OPENED_PACK, RATE_LIMIT, REDEEM_DETAILS,
  PRE_WITHDRAW, WITHDRAW_CONFIRMATION, WITHDRAW, FAILED_WITHDRAW, WITHDRAW_SUCCESS,
  REDEEM_CONFIRMATION, REDEEM, FAILED_REDEEM, ACTIVATE_CONFIRMATION, ACTIVATE, FAILED_ACTIVATE,
  REDEEM_SUCCESS, WITHDRAW_DETAILS, OPEN_PACKS_DETAILS
} from '@constants/modals'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import NftDetails from './initial-modals/nft-details'
import PacksDetails from './initial-modals/packs-details'
import RedeemDetails from './initial-modals/redeem-details'
import WithdrawDetails from './initial-modals/withdraw-details'
import OpenPacksDetails from './initial-modals/open-packs-details'

import NftBuyOptions from './payments-modals/nft-buy-options'
import PacksBuyOptions from './payments-modals/packs-buy-options'
import BuyCard from './payments-modals/buy-card'
import BuyCrypto from './payments-modals/buy-crypto'
import PreCryptoCheckout from './payments-modals/pre-crypto-checkout'
import Reservation from './payments-modals/reservation'
import CryptoCheckout from './payments-modals/crypto-checkout'

import InstallWallet from './mm-modals/install-wallet'
import ConnectWallet from './mm-modals/connect-wallet'
import ChangeWallet from './mm-modals/change-wallet'
import ChangeNetwork from './mm-modals/change-network'
import AddNetwork from './mm-modals/add-network'

import ReservationBlocked from './error-modals/reservation-blocked'
import ReservedByAnother from './error-modals/reserved-by-another'
import ItemSold from './error-modals/item-sold'
import ReservationExpired from './error-modals/reservation-expired'
import ReservationIsNotActive from './error-modals/reservation-is-not-active'
import FailedPayment from './error-modals/failed-payment'
import RateLimit from './error-modals/rate-limit'
import FailedWithdraw from './error-modals/failed-withdraw'
import FailedRedeem from './error-modals/failed-redeem'
import FailedActivate from './error-modals/failed-activate'

import PacksOpeningLoading from './opening-pack-modals/packs-opening-loading'
import OpenedPack from './opening-pack-modals/opened-pack'

import WithdrawConfirmation from './withdraw-modals/withdraw-confirmation'
import PreWithdraw from './withdraw-modals/pre-withdraw'
import Withdraw from './withdraw-modals/withdraw'

import RedeemConfirmation from './redeem-modals/redeem-confirmation'
import Redeem from './redeem-modals/redeem'

import ActivateConfirmation from './activate-modals/activate-confirmation'
import Activate from './activate-modals/activate'

import NftPaymentSuccess from './success-modals/nft-payment-success'
import PacksPaymentSuccess from './success-modals/packs-payment-success'
import WithdrawSuccess from './success-modals/withdraw-success'
import RedeemSuccess from './success-modals/redeem-success'

const modalsConfig = {
	[NFT_DETAILS]: NftDetails,
	[PACKS_DETAILS]: PacksDetails,
	[NFT_BUY_OPTIONS]: NftBuyOptions,
	[PACKS_BUY_OPTIONS]: PacksBuyOptions,
	[BUY_CARD]: BuyCard,
	[BUY_CRYPTO]: BuyCrypto,
	[NFT_PAYMENT_SUCCESS]: NftPaymentSuccess,
	[PACKS_PAYMENT_SUCCESS]: PacksPaymentSuccess,
	[PRE_CRYPTO_CHECKOUT]: PreCryptoCheckout,
	[INSTALL_WALLET]: InstallWallet,
	[CONNECT_WALLET]: ConnectWallet,
	[CHANGE_WALLET]: ChangeWallet,
	[CHANGE_NETWORK]: ChangeNetwork,
	[RESERVATION]: Reservation,
	[RESERVATION_BLOCKED]: ReservationBlocked,
	[RESERVED_BY_ANOTHER]: ReservedByAnother,
	[ITEM_SOLD]: ItemSold,
	[RESERVATION_EXPIRED]: ReservationExpired,
	[RESERVATION_IS_NOT_ACTIVE]: ReservationIsNotActive,
	[FAILED_PAYMENT]: FailedPayment,
	[CRYPTO_CHECKOUT]: CryptoCheckout,
	[ADD_NETWORK]: AddNetwork,
	[PACKS_OPENING_LOADING]: PacksOpeningLoading,
	[OPENED_PACK]: OpenedPack,
  [RATE_LIMIT]: RateLimit,
  [REDEEM_DETAILS]: RedeemDetails,
  [PRE_WITHDRAW]: PreWithdraw,
  [WITHDRAW_CONFIRMATION]: WithdrawConfirmation,
  [WITHDRAW]: Withdraw,
  [FAILED_WITHDRAW]: FailedWithdraw,
  [WITHDRAW_SUCCESS]: WithdrawSuccess,
  [REDEEM_CONFIRMATION]: RedeemConfirmation,
  [REDEEM]: Redeem,
  [FAILED_REDEEM]: FailedRedeem,
  [ACTIVATE_CONFIRMATION]: ActivateConfirmation,
  [ACTIVATE]: Activate,
  [FAILED_ACTIVATE]: FailedActivate,
  [REDEEM_SUCCESS]: RedeemSuccess,
  [WITHDRAW_DETAILS]: WithdrawDetails,
  [OPEN_PACKS_DETAILS]: OpenPacksDetails
}

export default function GlobalModal () {
	const isOpen = useTypedSelector(state => state.modal.isOpen)
	const viewType = useTypedSelector(state => state.modal.viewType)

	if (!isOpen) return null
	if (!viewType) return null

	const Component = modalsConfig[viewType]
	if (!Component) {
		console.warn(`Modal with viewType: ${viewType} mot implemented`)
		return null
	}
	return <Component />
}
