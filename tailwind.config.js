// ...existing code...
export default {
  content: [
    "./src/main/resources/**/*.{html,js}",
    "./src/**/*.{html,js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5fbff",
          100: "#e6f6ff",
          200: "#bfe9ff",
          400: "#3fb7ff",
          600: "#0a8ee6",
          800: "#05607a"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem"
        }
      },
      borderRadius: {
        md: "0.5rem"
      },
      boxShadow: {
        brand: "0 8px 30px rgba(10,142,230,0.12)"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  darkMode: "class"
};
// ...existing code...