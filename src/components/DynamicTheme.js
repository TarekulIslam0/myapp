import React, { createContext, useContext } from 'react';

const ThemeContext = createContext({
  theme: { background: '#121212', primary: '#1DB954' }
});

export const useDynamicTheme = () => useContext(ThemeContext);

export default function DynamicThemeProvider({ children }) {
  const theme = {
    background: '#121212',
    primary: '#1DB954',
    card: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#B3B3B3'
  };
  
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
