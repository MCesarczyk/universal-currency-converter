import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Ubuntu', sans-serif;
  background-size: cover;
  background-position: center;
  background-color: #ddd;
  background-attachment: fixed;
}`;