// @ts-nocheck
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { REDEEM_DETAILS } from '@constants/modals'
import { NFT } from '@constants/payments'

import { setModal } from '@entities/modal/actions'

import Preview from './Preview'
import Title from './Title'
import ActionButton from './ActionButton'
import Statistic from './statistic'
import BadgesList from './BadgesList'
import Score from './Score'
import UtilityInformation from './UtilityInformation'

export default function RedeemCard ({ token }) {
  const dispatch = useDispatch()

  const openRedeemDetails = React.useCallback(() => {
    dispatch(setModal({
      isOpen: true,
			viewType: REDEEM_DETAILS,
      options: {
				type: NFT,
        initialPoint: REDEEM_DETAILS,
        actionPoint: REDEEM_DETAILS,
        token
			},
			data: token.nft
    }))
  }, [dispatch, token])

  return (
    <StyledWrapper onClick={openRedeemDetails}>
      <Preview nft={token.nft} />
      <div className='details-wrapper'>
        <div>
          <div className='title-wrapper'>
            <Title token={token} />
            <ActionButton token={token} />
          </div>
          <Statistic token={token} />
        </div>
        <hr className='separator' />
        <div className='meta-data'>
          <BadgesList token={token} />
          <Score token={token} />
        </div>
        <UtilityInformation token={token} />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 43px 51px 40px 51px;
  background: #ebf2f8;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(24px);
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 43px 30px 40px 30px;
  }
  @media only screen and (max-width: 480px) {
    padding: 43px 20px 45px 20px;
  }
  &:not(:first-child) {
    margin: 30px 0 0;
  }
  .details-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    margin-left: 35px;
    @media only screen and (max-width: 768px) {
      margin: 30px auto 0;
    }
    .title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media only screen and (max-width: 480px) {
        flex-direction: column;
      }
    }
    .separator {
      border: none;
      border-top: 1px solid var(--redeemItem-line-BorderColor);
      width: 100%;
      margin: 19px 0 5px;
      @media only screen and (max-width: 480px) {
        margin: 30px 0;
      }
    }
    .meta-data {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: nowrap;
      margin-top: 10px;
      @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
      }
    }
  }
`
