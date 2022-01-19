import React, { useContext } from 'react';
import { HiOutlineSun } from '@react-icons/all-files/hi/HiOutlineSun';
import { HiOutlineMoon } from '@react-icons/all-files/hi/HiOutlineMoon';
import { ThemeContext } from '../utils/themeContext';

const ModeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.removeAttribute('class');
    }
  };

  return (
    <>
      <button className="antialiased" onClick={handleThemeChange}>
        {theme === 'light' ? (
          <HiOutlineMoon />
        ) : (
          <HiOutlineSun className="dark:text-slate-50" />
        )}
      </button>
    </>
  );
};

export default ModeToggler;
