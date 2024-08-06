/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        prim: "#627791",
        sec: "#2f455c",
        third: "#3d5a7a",
        fourth: "#1dcdfe",
      },
    },
  },
  plugins: [],
};
