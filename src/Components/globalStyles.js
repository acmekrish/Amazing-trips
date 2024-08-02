import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f9fa;
    color: #333;
  }

  h1 {
    text-align: center;
    margin-top: 20px;
    color: #ff385c;
  }
`;

export default GlobalStyle;
