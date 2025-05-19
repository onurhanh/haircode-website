const config = {
  plugins: ["@tailwindcss/postcss"],
};
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideDownFade: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDownFade: 'slideDownFade 1s ease-out forwards',
        slideUpFade: 'slideUpFade 1s ease-out forwards',
      },
    },
  },
}

export default config;
