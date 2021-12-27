import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700">
      <MDXProvider>{children}</MDXProvider>
    </button>
  );
};

export default Button;
