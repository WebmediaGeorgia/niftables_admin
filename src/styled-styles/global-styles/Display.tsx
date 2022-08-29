import { createGlobalStyle } from 'styled-components'

const Display = createGlobalStyle`
  .g-d-flex {
    display: flex;
  }
  .g-justify-between {
    justify-content: space-between;
  }
  .g-justify-center {
    justify-content: center;
  }
  .g-align-center {
    align-items: center;
  }
`

export default Display
