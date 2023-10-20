/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /* If we want to preserve the default values but also want to add new values, add the extensions inside the
    extend section */
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
      },
    },
  },
  plugins: [],
};
