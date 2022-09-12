import React from "react";
import styled from "styled-components";

const HoverableActionButton = ({ className, children }) => {
  return (
    <BuyNowWrapper className={className}>
      {children}
    </BuyNowWrapper>
  )
}

export default HoverableActionButton;

export const BuyNowWrapper = styled.div`
  height: 100%;
  position: relative;
  margin-left: auto;
  width: 105px;

  background: linear-gradient(to bottom, transparent 50%, #FF66C4 50%);
  background-size: 100% 200%;
  background-position: left top;
  transition: background 0.25s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;
`;
