/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
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