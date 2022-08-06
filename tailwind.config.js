/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-black": "#0a0a0a",
        "default-black-500": "#636363",
        "default-black-50": "#f2f2f2",
      },
      backgroundImage: {
        banner: "url('/public/images/banners/banner.jpg')",
        "m-banner": "url('/images/banners/m_banner.jpg')",
      },
    },
  },
  plugins: [],
};
