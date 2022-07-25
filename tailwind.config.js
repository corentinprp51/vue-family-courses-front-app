module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FC7900',
        'primary-color-darker': '#CC6200',
        'secondary-text-color': '#F1F1F1',
        'third-text-color': '#9A9A9A',
        'light-gray-bg': '#F7F7F7',
      },
      dropShadow: {
        'classic': '0 4px 2px rgba(0,0,0,0.10)'
      }
    },
  },
  plugins: [],
}
