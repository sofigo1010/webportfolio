/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, oklch(28.94% 0.081 230), oklch(13.65% 0.091 264.07))",
      },
    },
  },
  plugins: [],
};
