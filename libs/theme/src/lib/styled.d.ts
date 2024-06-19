import 'styled-components';
import { defaultTheme } from './customTheme';

// interface CustomTheme {
//   color: {
//     background: string;
//     innerContainerBackground: string;
//     elementsText: string;
//     elementsBackground: string;
//     crimson: string;
//     emerald: string;
//   };
//   breakpoint: {
//     xs: string;
//     sm: string;
//     md: string;
//     lg: string;
//     xl: string;
//     xxl: string;
//   };
// }

declare module 'styled-components' {
  type CustomTheme = typeof defaultTheme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends CustomTheme { }
}