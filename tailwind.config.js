const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{html,js}",
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
  theme: {
    extend: {
      height: {
        'landing-photo': '42rem', // Define your custom height value here
        'landing-photo2': '32rem',
        'xs-corouser' : '72rem',
        'md-corouser' : '30rem',
        'lg-corouser' : '32rem'
      },
      width :{
        'side_bar' : '16rem'
      },
      colors : {
        'bgColor' : '#1B9C85'
      },
      screens: {
        'xs': '475px',
        
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
}