import { createGlobalStyle } from "styled-components";

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
  font-family: 'Ubuntu', sans-serif;
  background-color: ${({ theme }) => theme.color.background};
  max-width: ${({ theme }) => theme.breakpoint.xl};
  height: 100%;
  margin: 0 auto;
}`;