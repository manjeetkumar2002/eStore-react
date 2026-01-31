// themeContext.jsx
import { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    primary: "#4E61D3",
    secondary: "#8b5cf6",
    background: "#f5f8fc",
    surface: " #E5E4E2",
    shadow:"#EEEEEE",
    text: "#1f2937",
    textLight: "#6b7280",
    border: "#e5e7eb",
    success: "#10b981",
    error: "#ef4444",
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};