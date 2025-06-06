/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sunny: {
          "primary": "#facc15",
          "secondary": "#fde68a",
          "background": "#fff7ed",
          "text": "#92400e",
        },
        rainy: {
          "primary": "#3b82f6",
          "secondary": "#1e3a8a",
          "background": "#1e40af",
          "text": "#e0f2fe",
        },
        cloudy: {
          "primary": "#9ca3af",
          "secondary": "#6b7280",
          "background": "#f3f4f6",
          "text": "#374151",
        },
        snowy: {
          "primary": "#e0f2fe",
          "secondary": "#bae6fd",
          "background": "#f0f9ff",
          "text": "#0369a1",
        },
      }
    ],
  }
}
