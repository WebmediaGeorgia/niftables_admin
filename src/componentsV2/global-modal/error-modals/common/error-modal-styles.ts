import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: ${({ theme }) => theme.text.primary}
  }
  .description {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.text.primary}
  }
  .buttons-wrapper {
    max-width: 375px;
  }
`
