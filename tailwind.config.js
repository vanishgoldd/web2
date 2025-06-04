import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            "primary": {
              "50": "#e6f7ff",
              "100": "#cceeff",
              "200": "#99ddff",
              "300": "#66ccff",
              "400": "#33bbff",
              "500": "#00aaff",
              "600": "#0088cc",
              "700": "#006699",
              "800": "#004466",
              "900": "#002233",
              "DEFAULT": "#00aaff",
              "foreground": "#ffffff"
            }
          }
        },
        dark: {
          colors: {
            "background": {
              "DEFAULT": "#0a0a0c"
            },
            "content1": {
              "DEFAULT": "#16161a",
              "foreground": "#fffffe"
            },
            "content2": {
              "DEFAULT": "#242629",
              "foreground": "#fffffe"
            },
            "primary": {
              "50": "#002233",
              "100": "#004466",
              "200": "#006699",
              "300": "#0088cc",
              "400": "#00aaff",
              "500": "#33bbff",
              "600": "#66ccff",
              "700": "#99ddff",
              "800": "#cceeff",
              "900": "#e6f7ff",
              "DEFAULT": "#00aaff",
              "foreground": "#ffffff"
            }
          }
        }
      }
    })
  ]
}
