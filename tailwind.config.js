module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,jsx,ts}"],
  },
  theme: {
    container: {
      padding: "15px",
      center: true,
    },
    extend: {
      spacing: {
        7.5: "1.875rem",
        15: "3.75rem",
        18: "4.5rem",
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        primary: {
          DEFAULT: "#6A33FF",
          dark: "#301E5F",
          md: "#9D7FEA",
          light: "#DACBFF",
        },
        gray: {
          DEFAULT: "#BFBFBF",
          dark: "#797979",
          light: "#F8F8F8",
          border: "#b9b9b9",
        },
        secondary: {
          DEFAULT: "#818A91",
          light: "#CED4DA",
        },
        blue: "#0067CE",
        red: {
          DEFAULT: "#C44021",
          dark: "#9D3F27",
        },
      },
      fontFamily: {
        sans: [
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      fontSize: {
        h1: "2rem",
        h2: "1.75rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      ({ addComponents }) => {
        addComponents({
          ".container": {
            maxWidth: "100%",
            "@screen sm": {
              maxWidth: "540px",
            },
            "@screen md": {
              maxWidth: "768px",
            },
            "@screen lg": {
              maxWidth: "960px",
            },
            "@screen xl": {
              maxWidth: "1110px",
            },
          },
        });
      },
    ],
  },
};
