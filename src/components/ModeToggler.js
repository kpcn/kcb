import { useContext } from 'react';
import { HiOutlineLightBulb } from '@react-icons/all-files/hi/HiOutlineLightBulb';
import { IoMdBulb } from '@react-icons/all-files/io/IoMdBulb';
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
          <HiOutlineLightBulb className="w-5 h-5" />
        ) : (
          <IoMdBulb className="dark:text-slate-50" />
        )}
      </button>
    </>
  );
};

export default ModeToggler;
