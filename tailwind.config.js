/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-black": "#0a0a0a",
        "default-500": "#636363",
      },
      backgroundImage: {
        banner: "url('/public/images/banners/banner.jpg')",
        "m-banner": "url('/images/banners/m_banner.jpg')",
      },
    },
  },
  plugins: [],
};
