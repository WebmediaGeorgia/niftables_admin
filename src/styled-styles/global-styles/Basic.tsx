import { createGlobalStyle } from 'styled-components'
import "@fontsource/oswald";

const Basic = createGlobalStyle`
  * {
    font-family: 'Oswald', sans-serif;
  }
  @font-face {
    font-family: 'Wild World';
    src: url("/assets/fonts/wildworld/WILD_WORLD.ttf");
  }
  .g-container {
    width: 100%;
    max-width: 1240px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .g-grid-wrapper {
    display: flex;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
`

export default Basic
