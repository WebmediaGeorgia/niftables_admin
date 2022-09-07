import { createGlobalStyle } from 'styled-components'

const Lines = createGlobalStyle`
  .g-h-separator {
    width: 100%;
    height: 1px;
    opacity: 0.15;
    background: ${({ theme }) => theme.common.separatorColor};
  }
`

export default Lines
