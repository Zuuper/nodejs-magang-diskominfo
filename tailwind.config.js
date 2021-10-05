module.exports = {
  purge: {
    enabled: true,
    content : ['./src/**/*.{html,ts}']
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      'xs' : '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors : {
      transparent: 'transparent',
      current : 'currentColor',
      primary: {
        light : '#A11741',
        DEFAULT : '#CD1D53',
        dark : '#e33b6e' 
      },
      secondary : {
        light: '#5F2052',
        DEFAULT : '#842D72',
        dark : '#AB3A94'
      },
      accent : {
        light : '#1AA4B2',
        DEFAULT : '#21CEDE',
        dark : '#4DD7E5'
      },
      background : {
        light : '#fbfbfb',
        DEFAULT : '3fbfbfb',
        dark : '#0F0E0E0'
      },
      white : {
        DEFAULT : '#FCFCFC'
      },
      black : {
        DEFAULT : '#0F0E0E'
      },
      positive : {
        light : '#5CB21A',
        DEFAULT : '#73DE21',
        dark : '#8FE54D'
      },
      warning : {
        light : '#C88F1E',
        DEFAULT : '#e2d939',
        dark : '#E8E164'
      }
    },
    fontFamily : {
      sans : ['poppins', 'sans-serif']
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(95, 32, 82, 0.05)',
      DEFAULT: '0 4px 40px 0 rgba(95, 32, 82, 0.25), 0 8px 32px 0 rgba(95, 32, 82, 0.10)',
      md: '0 4px 6px -1px rgba(95, 32, 82, 0.1), 0 2px 4px -1px rgba(95, 32, 82, 0.06)',
      lg: '0 10px 15px -3px rgba(95, 32, 82, 0.1), 0 4px 6px -2px rgba(95, 32, 82, 0.05)',
      xl: '0 20px 25px -5px rgba(95, 32, 82, 0.1), 0 10px 10px -5px rgba(95, 32, 82, 0.04)',
      '2xl': '0 25px 50px -12px rgba(95, 32, 82, 0.15)',
     '3xl': '0 35px 60px -15px rgba(95, 32, 82, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(95, 32, 82, 0.06)',
      none: 'none',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['hover', 'focus','active'],
    },
  },
  plugins: [],
}
