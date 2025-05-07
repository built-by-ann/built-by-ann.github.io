
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-maroon': '#490013',
        'peach-orange': '#ED8466',
        'ocean-blue': '#2E4D62',
        'dusty-rose': '#BE7880',
        'blush-pink': '#F5D7CC',
        'lavender': '#F0C3E9',
        'slate-blue': '#1E3F55',
      },
      fontFamily: {
        header: ['Outfit', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        header: ['68px', { lineHeight: 'normal', fontWeight: '700' }],
        body: ['24px', { lineHeight: 'normal' }],
      },
      spacing: {
        'section': '96px',
      },
      width: {
        'layout': '1440px'
      },
    },
  },
  plugins: [],
};
