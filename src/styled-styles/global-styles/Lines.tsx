import { createGlobalStyle } from 'styled-components'

const Lines = createGlobalStyle`
  .g-h-separator {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.common.separatorColor};
  }
`

export default Lines
