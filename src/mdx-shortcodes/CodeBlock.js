import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

const CodeBlock = ({ children }) => {
  return (
    <div className="flex max-w-xs overflow-x-hidden sm:max-w-full">
      <pre className="w-full">
        <MDXProvider>{children}</MDXProvider>;
      </pre>
    </div>
  );
};

export default CodeBlock;
