import * as React from 'react';
import { Link } from 'gatsby';
import PopoverFilters from './PopoverFilters';
import ReadingModeSwitchBoard from './ReadingModeSwitchBoard';

const Header = () => {
  return (
    <div className="sticky top-0 z-10 px-8 py-6 shadow-sm bg-gray-50">
      <div className="flex justify-between w-full">
        <div className="flex space-x-2 text-lg font-thin tracking-wide uppercase ">
          <PopoverFilters />
          <span>Posts</span>
        </div>
        <div className="flex space-x-3">
          <div className="text-lg font-thin tracking-wide uppercase">
            <Link to="/">Home</Link>
          </div>
          <ReadingModeSwitchBoard />
        </div>
      </div>
    </div>
  );
};

export default Header;
