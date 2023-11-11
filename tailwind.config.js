/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#10141b",
        primary: "#2f58cd",
        selection: "#6680c9",
      },
      contrast: {
        85: 0.85,
      },
      maxWidth: {
        "8xl": "96rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
