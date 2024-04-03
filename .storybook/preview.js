import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';
import { StyledComponent } from "../src/ui/StyledComponent";

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  `;
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: {},
        dark: {},
      },
      defaultTheme: "light",
      Provider: StyledComponent,
      GlobalStyles,
    }),
  ],
};

export default preview;
