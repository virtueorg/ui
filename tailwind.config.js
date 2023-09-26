/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#f8fafc",
        muted: "#94a3b8",
        primary: "#818cf8",
        warning: "#fbbf24",
        error: "#f87171",
        panel: "#090E1F",
      },
    },
  },

  plugins: [],
};
