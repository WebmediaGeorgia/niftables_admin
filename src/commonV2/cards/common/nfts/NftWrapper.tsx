import styled from 'styled-components'

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
    justify-content: space-between;
    min-height: 40px;
    padding: 9px 28px;
  }
`
export default StyledWrapper
