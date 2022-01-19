import React from 'react';
import ThemeContextProvider from './src/utils/themeContext';
import './src/styles/global.css';
require('prismjs/themes/prism-solarizedlight.css');

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
