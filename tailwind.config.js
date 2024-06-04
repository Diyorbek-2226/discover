/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/components/img/bfwAi41.jpg')",
      },
    },
  },
  plugins: [],
}
