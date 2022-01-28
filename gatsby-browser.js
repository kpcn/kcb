import ThemeContextProvider from '@utils/themeContext';
import '@styles/global.css';

require('prismjs/themes/prism-solarizedlight.css');

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
