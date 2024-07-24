// styles/customTheme.ts
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const COLORS = {
  yellow: '#ffe300',
  gray: '#bbbbbb',
  shadow: grey[900],
};

// Define colors for light and dark modes
const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#9c27b0',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#000000',
            secondary: '#555555',
            title: '#ffe300',
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#ce93d8',
          },
          background: {
            default: '#121212',
            paper: '#1d1d1d',
          },
          text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
            title: '#ffe300',
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
            boxShadow: `0px 2px 8px ${COLORS.shadow}`,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            '&:hover': {
              color: COLORS.yellow,
            },
          },
        },
      },
    },
  },
});

const customTheme = (mode: 'light' | 'dark') =>
  createTheme(getDesignTokens(mode));

export default customTheme;
