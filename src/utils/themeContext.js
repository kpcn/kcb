import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext({
  theme: '',
  setTheme: (theme) => {
    this.theme = theme;
  },
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add(theme);
      }
      return theme || 'light';
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
