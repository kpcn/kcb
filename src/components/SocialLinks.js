import React from 'react';

const IconLink = ({ url, children }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-8 h-8"
    >
      {children}
    </svg>
  </a>
);

const SocialLinks = () => {
  return (
    <div className="flex justify-center px-6 space-x-6">
      <IconLink url="https://github.com/kpcn">
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
        0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0
        0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09
        1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44
        7A3.37 3.37 0 0 0 9 18.13V22"
        />
      </IconLink>
      <IconLink url="https://codesandbox.io/u/kpcn">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m7.5 4.21 4.5 2.6 4.5-2.6m-9 15.58V14.6L3 12m18 0-4.5 2.6v5.19M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
      </IconLink>
      <IconLink url="https://twitter.com/kchancnk">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </IconLink>
    </div>
  );
};

export default SocialLinks;
