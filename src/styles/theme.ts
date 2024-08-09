import { createTheme } from '@mui/material/styles';

export const COLORS = {
  yellow: '#ffe300',
  darkGrey: '#555555',
  grey: '#bbbbbb',
  lightGray: '#1d1d1d',
  shadow: '#212121',
  shadowLight: '#1d1d1d',
  black: '#121212',
  darkWhite: '#f5f5f5',
  white: '#ffffff',
  blue: '#90caf9',
  plum: '#ce93d8',
};

const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode
          primary: {
            main: COLORS.plum,
          },
          secondary: {
            main: COLORS.blue,
          },
          background: {
            default: COLORS.darkWhite,
            paper: COLORS.white,
          },
          text: {
            primary: COLORS.black,
            secondary: COLORS.darkGrey,
            accent: COLORS.plum,
          },
        }
      : {
          // Dark mode
          primary: {
            main: COLORS.blue,
          },
          secondary: {
            main: COLORS.plum,
          },
          accent: {
            main: COLORS.yellow,
          },
          background: {
            default: COLORS.black,
            paper: COLORS.lightGray,
          },
          text: {
            primary: COLORS.darkWhite,
            secondary: COLORS.grey,
            accent: COLORS.yellow,
          },
        }),
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.yellow,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: `0 0 0 ${COLORS.shadow}`,
          transform: 'scale(1)',
          transition: 'transform .3s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0px 2px 8px ${
              mode === 'light' ? COLORS.blue : COLORS.shadow
            }`,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            '&:hover': {
              color: mode === 'light' ? COLORS.blue : COLORS.yellow,
            },
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            background: mode === 'light' ? COLORS.plum : COLORS.lightGray,
            color: mode === 'light' ? COLORS.black : COLORS.yellow,
          },
        },
      },
    },
  },
});

const customTheme = (mode: 'light' | 'dark') =>
  createTheme(getDesignTokens(mode));

export default customTheme;
