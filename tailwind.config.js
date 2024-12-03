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
        placeholder: "#ccc",
        glassBorderColor: "rgba(255,255,255,.5)",
        errorColor: "rgba(235, 76, 66, .4)",
        errorColorNoOpacity: "rgba(235, 76, 66, 1)",
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
      screens: {
        "w-1630": { max: "1630px" },
        "w-1600": { max: "1600px" },
        "w-1520": { max: "1520px" },
        "w-1500": { max: "1500px" },
        "w-1460": { max: "1460px" },
        "w-1400": { max: "1400px" },
        "w-1370": { max: "1370px" },
        "w-1330": { max: "1330px" },
        "w-1300": { max: "1300px" },
        "w-1290": { max: "1290px" },
        "w-1200": { max: "1200px" },
        "w-1160": { max: "1160px" },
        "w-1150": { max: "1150px" },
        "w-1050": { max: "1050px" },
        "w-930": { max: "930px" },
        "w-820": { max: "820px" },
        "w-800": { max: "800px" },
        "w-750": { max: "750px" },
        "w-700": { max: "700px" },
        "w-670": { max: "670px" },
        "w-630": { max: "630px" },
        "w-600": { max: "600px" },
        "w-560": { max: "560px" },
        "w-540": { max: "540px" },
        "w-500": { max: "500px" },
        "w-460": { max: "460px" },
        "w-420": { max: "420px" },
        "w-385": { max: "385px" },
        "w-375": { max: "375px" },
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
