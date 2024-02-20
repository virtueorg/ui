/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#f4f4f5",
        muted: "#a1a1aa",
        primary: "#818cf8",
        warning: "#fbbf24",
        error: "#f87171",
        panel: "#111113",
      },
    },
  },

  plugins: [],
}
