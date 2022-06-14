/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,md,js}", "./layouts/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
