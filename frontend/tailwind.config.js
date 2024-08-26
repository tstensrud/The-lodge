/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'app-bg-color' : '#060E0E',
      'link-green' : '#00FFA7',
      'link-hover' : '#ffffff',
      'navbar-bg-color' : "#060E0E",
      'navbar-link-active-bg' : '#122c1c',
      'navbar-main-color' : '#121c26',
      'navbar-active-link-text' : "#00ffa6",
      'svg-icon-color': '#b4b4b4c5',
      'header-link' : "#b4b4b4c5",
      'header-link-hover' : '#ffffff',
      'border-color' : '#2b3540',
      'card-bg-color' : '#121c26',
      'post-card-title-link': "#ffffff", 
      'grey-text' : '#808080',
      'form-hover' : "#00FFA7",
      'form-focus' : "#00FFA7",
      'post-content-color' : '#ffffffb7',
      'login-bg' : "#ffffff4d",
      'button-text-color' : "#ffffff"
      
    } ,

    extend: {},
  },
  plugins: [],
}

