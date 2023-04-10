/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0053E1",
        secondary: "#EEF3FF",
        darkgary: "#6D727D",
        lightgray: "#C1C6D2",
        bordergray: "#EBEEF5",
        black: "#000000",
        darkblack: "#181A1F",
        background: "#F9FBFF",
      },
      spacing: {
        128: "32rem",
      },
      width: {
        smallWidth: "6.875rem",
        mediumWidth: "13.938rem",
        largeWidth: "26.188rem",
        modalWidth: "32.875rem"
      },
    },
    fontFamily: {
      display: ["Inter Tight"],
      body: ['"Inter Tight"'],
    },
  },
  plugins: [],
};
