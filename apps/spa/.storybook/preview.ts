import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from '@theme';

const GlobalStyles = GlobalStyle;

export const tags = ["autodocs"];

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
