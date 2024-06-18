import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from '@theme';
// import { worker } from '../src/mocks/browser';

const GlobalStyles = GlobalStyle;

export const tags = ["autodocs"];

// if (typeof global.process === 'undefined') {
//   worker.start()
// }

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme
    },
    defaultTheme: "default",
    Provider: ThemeProvider,
    GlobalStyles
  })
];
