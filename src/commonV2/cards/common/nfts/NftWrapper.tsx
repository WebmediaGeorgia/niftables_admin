import styled from 'styled-components'
import { BuyNowWrapper } from "@commonV2/cards/common/nfts/HoverableActionButton";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  transition: all 0.2s;
  overflow: hidden;
  cursor: pointer;
  .body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 28px 12px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 18px;
      margin-top: 16px;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 9px 28px;

    &__without-spacing {
      padding: 0;
    }
  }

  .media {
    & .image {
      transition: transform 0.25s ease-out;
    }
  }

  &:hover {
    .media {
      & .image {
        transform: scale(1.1);
      }
    }

    ${BuyNowWrapper} {
      background-position: right bottom;

      div, span {
        color: white;
      }
    }
  }
`
export default StyledWrapper
