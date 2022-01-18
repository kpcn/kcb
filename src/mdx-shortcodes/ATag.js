import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

const ATag = ({ href, children }) => {
  return (
    <a
      className="text-blue-400 no-underline"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <MDXProvider>{children}</MDXProvider>
    </a>
  );
};

export default ATag;
