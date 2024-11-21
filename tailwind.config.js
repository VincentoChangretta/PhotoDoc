/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#934248",
        textColorOpacity: "rgba(112,50,55,0.5)",
        textColorHover: "#703237",
        textColorDoubleHover: "#542629",
        invertedTextColor: "#fff",
        gray: "rgb(245,245,245)",
        grayHover: "rgb(230,230,230)",
        grayBlock: "#f0f0f0",
        grayBlockText: "#ababab",
        invertedTextColorHover: "#E1E1E1",
        iconActive: "#ffffff !Important",
        shadowColor: "rgba(0,0,0,.3)",
        placeholder: "rgba(255,255,255,.6)",
        glassBorderColor: "rgba(255,255,255,.5)",
        errorColor: "rgb(255,58,44)",
        selectionBg: "#3D1C1E",
      },
      borderRadius: {
        elementRounded: "30px",
      },
      transitionProperty: {
        width: "width",
        grow: "flex-grow",
        color: "color",
        bg: "background",
        scale: "scale",
      },
      transitionDuration: {
        "50ms": ".45s",
      },
      boxShadow: {
        cardShadow:
          "37.2px 17.3px 30.8px rgba(0, 0, 0, 0.03), 71px 33px 69px rgba(0, 0, 0, 0.06)",
        reverseCardShadow:
          "-37.2px -17.3px 30.8px rgba(0, 0, 0, 0.03), -71px -33px 69px rgba(0, 0, 0, 0.06)",
      },
      margin: {
        iconMarginX: "15px",
      },
      minHeight: {
        "calc-100vh-40": "calc(100vh - 124px)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".translate-50": {
            transform: "translate(-50%, -50%)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
