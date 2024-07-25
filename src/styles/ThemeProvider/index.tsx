// components/ThemeProvider.tsx
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  Theme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import customTheme from '@/styles/theme';

interface ThemeContextType {
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme: Theme = useMemo(() => customTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
