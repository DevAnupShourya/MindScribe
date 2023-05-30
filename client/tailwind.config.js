/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Dark Mode
        primary: '#26212e',
        secondary: '#1e1d22',
        accent: {
          DEFAULT: '#4341e8', // Links
          hover: '#31307e',
        },
        text: '#fdfcff', // Heading
        placeholder: '#78797d',  // Noral Text
        error: '#E53E3E',        // Red error color
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave", "cyberpunk", "halloween", "aqua", "luxury", "dracula", "night", "winter"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}