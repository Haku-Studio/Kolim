/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSansBlack: ["DMSans-Black", "sans-serif"],
        dmSansExtraBold: ["DMSans-ExtraBold", "sans-serif"],
        dmSansBold: ["DMSans-Bold", "sans-serif"],
        dmSansSemibold: ["DMSans-SemiBold", "sans-serif"],
        dmSansMedium: ["DMSans-Medium", "sans-serif"],
        dmSansRegular: ["DMSans-Regular", "sans-serif"],
        dmSansLight: ["DMSans-Light", "sans-serif"],
        dmSansExtraLight: ["DMSans-ExtraLight", "sans-serif"],
        dmSansThin: ["DMSans-Thin", "sans-serif"]
      },
      letterSpacing: {
        thigher: "-2%"
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        base: '18px',
        lg: '20px',
        xl: '22px'
      },
      lineHeight: {
        base: '155%'
      },
      colors: {
        
      }
    },
  },
  plugins: [],
}

