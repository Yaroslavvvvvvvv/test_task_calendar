/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        source: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        primary: '#1DA1F2', // Custom color example
        secondary: '#14171A', // Another custom color
        accent: '#F5A623', // Accent color
        customGray: '#657786', // Custom gray color
        sidebar: '#43425d',
        sidebarDark: '#35344a',
        sidebarNav: '#a3a0fb',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

