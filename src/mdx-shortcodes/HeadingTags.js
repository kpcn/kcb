import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const linkCreator = (text) => text.replace(' ', '-').toLowerCase();

export const H3Tag = ({ children }) => {
  const link = linkCreator(children);
  return (
    <h3 id={link} className="font-medium tracking-wide text-gray-600">
      <a
        href={`#${link}`}
        className="no-underline hover:underline underline-offset-8"
      >
        <MDXProvider>{children}</MDXProvider>
      </a>
    </h3>
  );
};

export const H4Tag = ({ children }) => {
  return (
    <h4 className="font-semibold tracking-wide text-slate-500">
      <MDXProvider>{children}</MDXProvider>
    </h4>
  );
};
