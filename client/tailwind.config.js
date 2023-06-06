/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave", "cyberpunk", "halloween", "aqua", "luxury", "dracula", "night", "winter"]
  }
}