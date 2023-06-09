export const globalStyles = {
  body: {
    bg: 'navy.900',
    color: 'white',
  },
  '::-webkit-scrollbar': {
    width: '8px',
    height: '3px',
  },
  '::-webkit-scrollbar-thumb': {
    height: '50px',
    borderRadius: '3px',
    bg: 'cyan.500',
  },
  scrollbarFaceColor: 'pink.400',
  scrollbarBaseColor: 'pink.400',
  scrollbar3dlightColor: 'pink.400',
  scrollbarHighlightColor: 'pink.400',
  scrollbarShadowColor: 'pink.400',
  scrollbarDarkShadowColor: 'pink.400',
  scrollbarTrackColor: 'blue.900',
  scrollbarArrowColor: 'blue.900',
  '::-webkit-scrollbar-button': { bg: 'blue.900' },
  '::-webkit-scrollbar-track-piece': { bg: 'blue.900' },
  '::-webkit-resizer': { bg: 'cyan.500' },
  '::-webkit-scrollbar-track': { bg: 'pink.400' },
  '::-webkit-scrollbar-corner': { bg: 'pink.400' },

  // TODO: Update this once styled components removed
  '@media screen and (max-width: 768px)': {
    '.table-header-cell, .table-body-cell': {
      whiteSpace: 'nowrap',
    },
  },
  // Border Radius
  borderRadius: {
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
  },
  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '1.875rem',
    xl: '2.25rem',
    '2xl': '3rem',
    '3xl': '3.75rem',
    '4xl': '4.5rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },
};
