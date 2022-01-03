import React from 'react';
import Header from './Header';

const ContentWrapper = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full xl:w-8/12 bg-white">
        <Header />
        <div className="flex flex-col px-3 py-4 space-y-4 md:px-6 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
