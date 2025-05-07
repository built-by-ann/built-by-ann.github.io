/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
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
        'deep-maroon': '#490013',
      },
      fontFamily: {
        header: ['Outfit', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
