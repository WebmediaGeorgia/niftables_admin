import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  .title {
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    color: ${({ theme }) => theme.text.white}
  }
  .description {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.text.white}
  }
  .buttons-wrapper {
    max-width: 375px;
  }
`
