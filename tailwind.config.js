/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375',
        // => @media (min-width: 576px) { ... }
  
        'md': '768px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1200px',
        // => @media (min-width: 1440px) { ... }

        'xlg': '1440px'
      },
      
      colors:{
        primary: '#6B3CC9',
        secondary: '#F28D35',
        analogous1: '#6A44F2',
        analogous2: '#1CBDDD',
        triadic: '#52378C',
        dark:'#78BF91',
        text:'#2F2F2F',
        textLight:'#545A75',
        textSubtle: '#9C9991',
        accent1: '#E2F2FE',
        accent2: '#FFF8E0',
        error:'#FF0335',
        success: '#5EB30B'
      }
    },
  },
  plugins: [],
}