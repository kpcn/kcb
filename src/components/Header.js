import * as React from 'react';
import { Link } from 'gatsby';
import { TiArrowBackOutline } from '@react-icons/all-files/ti/TiArrowBackOutline';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import PopoverFilters from './PopoverFilters';

const Header = () => {
  const location = useLocation();
  return (
    <div className="sticky top-0 z-10 py-6 pl-4 pr-6 shadow-sm md:px-8 bg-gray-50">
      <div className=" flex items-center justify-between w-full">
        <div className="flex space-x-2 text-lg font-thin tracking-wide uppercase">
          {location.pathname.match(/\/blog\//g) ? (
            <button onClick={() => navigate(-1)}>
              <TiArrowBackOutline className="w-7 h-7" />
            </button>
          ) : (
            <>
              <PopoverFilters />
              <span className="antialiased">Posts</span>
            </>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-lg font-thin tracking-wide uppercase">
            <Link to="/" className="antialiased">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
