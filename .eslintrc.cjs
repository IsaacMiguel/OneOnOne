module.exports = {
  extends: [
    "semistandard",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    quotes: ["error", "double",],
    semi: ["error", "never",],
    "space-before-function-paren": ["error", "never",],
    "comma-dangle": ["error", "always",],
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["jsx-a11y",],
}
