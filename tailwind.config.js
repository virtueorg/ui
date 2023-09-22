/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#f8fafc",

        muted: "#0f172a",
        mutedForeground: "#94a3b8",
        mutedHover: "#1e293b",

        primary: "#818cf8",
        primaryForeground: "#020617",
        primaryHover: "#6366f1",

        warning: "#fbbf24",
        warningForeground: "#020617",
        warningHover: "#f59e0b",

        error: "#f87171",
        errorForeground: "#020617",
        errorHover: "#ef4444",
      },
    },
  },

  plugins: [],
};
