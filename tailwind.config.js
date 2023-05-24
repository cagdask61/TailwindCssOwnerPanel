/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      width: {
        '22': '5.5rem',
        '104': '26rem',
        '112': '28rem'
      },
      height: {
        '104': '26rem'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(25rem, 1fr))'
      },
      gridAutoRows: {
        '6': 'grid-auto-rows: 10rem'
      },
      colors: {
        'night': '#303030'
      },
      backgroundImage: {
        'view': "url('https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&w=1376&h=768')"
      }
    },
  },
  plugins: []
}