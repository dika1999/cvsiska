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
        primary: '#0C4F85',
        secondary: '#E3F2FD',
        tertiary: '#073F6C',
        quarternary: '',
        accent: {
          DEFAULT: '#F17521',
          hover: '#0695D0',
        },
        paragraph: '#ffffff',
      },
    },
  },
  plugins: [],
};
