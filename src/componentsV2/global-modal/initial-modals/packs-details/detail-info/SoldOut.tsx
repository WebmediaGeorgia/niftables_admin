import React from 'react'
import get from 'lodash/get'

import styled from "styled-components";

export default function SoldOut ({ pack }) {
  const availableSupply = get(pack, 'availableSupply')
  const packsNft = get(pack, 'packsNft')
  if (availableSupply === 0 && !packsNft) {
    return (
      <SoldOutContainer>
        <div className="title">Sold out</div>
        <div className="description">Lorem ipsum dolor sit amet, consectetur.</div>
      </SoldOutContainer>
    )
  }
  return null;
}

const SoldOutContainer = styled.div`
  background: rgba(7, 3, 31, 0.3);
  border-radius: 100px;
  margin-top: 15px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #FF66C4;
    text-transform: uppercase;
  }

  .description {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: white;
  }
`;
