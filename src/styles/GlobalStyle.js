import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto Mono', monospace;
  }

  body {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));    
  }
`;

export default GlobalStyle;
