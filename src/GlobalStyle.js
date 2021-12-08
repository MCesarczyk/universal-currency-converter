import { createGlobalStyle } from "styled-components";
import background from "./assets/images/background.png";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  height: 100%;
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  height: 100%;
}

body {
  background-image: url("${background}");
  background-size: contain;
  background-position: center;
  background-attachment: scroll;
  background-color: ${({ theme }) => theme.color.background};
  font-family: 'Ubuntu', sans-serif;
  background-color: ${({ theme }) => theme.color.background};
  height: 100%;
  margin: 0 auto;
  min-width: 300px;
}`;