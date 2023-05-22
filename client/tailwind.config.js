/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Light Mode
        primary: {
          DEFAULT: '#4A5568',    // Grayish-blue
          hover: '#718096',      // Gray (hover)
        },
        secondary: {
          DEFAULT: '#CBD5E0',    // Light gray
          hover: '#E2E8F0',      // Off-white (hover)
        },
        accent: {
          DEFAULT: '#F7FAFC',    // Off-white
          hover: '#EDF2F7',      // Off-white (hover)
        },
        // Dark Mode
        dark_primary: {
          DEFAULT: '#1A202C',    // Dark gray
          hover: '#2D3748',      // Dark gray (hover)
        },
        dark_secondary: {
          DEFAULT: '#F7FAFC',    // Off-white
          hover: '#EDF2F7',      // Off-white (hover)
        },
        dark_accent: {
          DEFAULT: '#718096',    // Gray
          hover: '#4A5568',      // Gray (hover)
        },
        text: '#333333',         // Dark gray text color
        placeholder: '#A5A5A5',  // Light gray placeholder color
        error: '#E53E3E',        // Red error color
      },
    },
  },
  plugins: [],
}

