/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bwhite: "#f6f5f1",
      bcream: "#f1e3da",
      bbrown: "	#a5928e",
      bgray: "#b5aca3",
      bgreen: "#51504b",
      black: "#000000",
      bblack: "#202020",
      bgreyish: "#6a6745",
      bblue: "#82a7aa",
      gray: "#525252",
      brown: "#827469",
      transparent: "transparent",
      orange: "#FD841F",
      darkOrange: "#E14D2A",
      red: "#CD104D",
      purple: "#9C2C77",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      courier: ["Courier Prime", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
