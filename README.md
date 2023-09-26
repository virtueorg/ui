# Virtue UI

A simple Svelte component library built on top of `bits-ui` and `TailwindCSS`.

## Prerequisites

You only need to [configure TailwindCSS](https://tailwindcss.com/docs/guides/sveltekit) in your project and you're good to go!

## Installation

To install the component library, simply install it with the following command

```
npm install virtue-ui
```

To make the library work, you also need to put the following code in your `tailwind.config.js` file. Please note that you can customize everything according to your needs!

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "node_modules/virtue-ui/**/*.{html,js,svelte,ts}",
  ],

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
```

## Usage

Simply import what you need and use it, it's as simple as that!

```
<script lang="ts">
  import { Button } from "virtue-ui";
</script>

<Button>Hello world!</Button>
```
