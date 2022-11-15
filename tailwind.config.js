module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      body: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      // content: {
      //   about: 'url("/src/assets/img/outline-text/about.svg")',
      //   portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
      //   services: 'url("/src/assets/img/outline-text/services.svg")',
      //   testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
      //   contact: 'url("/src/assets/img/outline-text/contact.svg")',
      // },
      colors: {
        primary: '#1e40af',
        secondary: '#312e81',
        tertiary: '#1e3a8a',
        quarternary: '#bfdbfe',
        accent: {
          DEFAULT: '#f97316',
          hover: '#312e81',
        },
        paragraph: '#ffffff',
      },
    },
  },
  plugins: [],
};
