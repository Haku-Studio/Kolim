/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./routeTree.gen.ts", // or wherever the routes are
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
        primary: '#6791C9',
        greyScale800: '#030616',
        greyScale500: '#364153',
        greyScale300: '#4A5567',
        geyScale100: '#CDD5E0',
        greyScale50: '#E3E8EF',
        greyScale25 : '#F2F5F9',
        greyScale0: '#F8FAFC'
      },
      borderRadius: {
        base: '12px'
      }
    },
  },
  plugins: [],
}


