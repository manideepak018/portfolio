/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D11",
        panel: "#12151B",
        line: "#232831",
        paper: "#E9E7E2",
        mist: "#8A91A0",
        accent: "#FFB454",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "62rem" },
    },
  },
  plugins: [],
};
