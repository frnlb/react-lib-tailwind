/** @type {import('tailwindcss').Config} */
module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  {
    name: "@storybook/addon-styling",
    options: {
      postCss: true,
    }
  }
],
  plugins: [require('tailwindcss'), require('autoprefixer')],
}