/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "4540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      animation: {
        'slide-in': 'slideInFromTop 2s ease-out forwards', 
      },
      keyframes: {
        slideInFromTop: {
          '0%': {
            transform: 'translateY(-100%)  ',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
    keyframes:{
      move:{
        "50%" : { transform : "translateY(-1rem)"}
      }, 
      rotate:{
         "0" : { transform : "rotate(0deg)"},
         "100%" : { transform : "rotate(360deg)"},
      },
      scaleUp: {
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(0.8)" },
      },
    },     
  
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleUp 3s linear infinite",
    },
    fontFamily:{
      jost : ["Jost" , "sans-serif"],
      Lobster:["Lobster" , "sans-serif"]
    },
    container:{
      center: true,
      padding:{
        DEFAULT : "12px",
        md: "32px",
      }
    },
  },
  plugins: [],
}

