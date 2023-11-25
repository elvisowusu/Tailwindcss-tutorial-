/** @type {import('tailwindcss').Config} */
export default {
  // this enables dardMode to work manually instead of relying on the operating system preferences
  darkMode : 'class',
  props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

