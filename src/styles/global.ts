import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
  
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
  }

  body {
    background-color: ${ props => props.theme['base-background'] };
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;