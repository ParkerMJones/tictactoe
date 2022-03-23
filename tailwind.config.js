module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a2a33',
        'light-navy': '#1F3641',
        'light-yellow': '#F2B137',
        'light-yellow-hover': '#FFC860',
      },
      boxShadow: {
        xlInner: 'inset 0px -8px 0px',
      },
    },
    plugins: [],
  },
}
