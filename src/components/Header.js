import * as React from 'react';
import { Link } from 'gatsby';
import { TiArrowBackOutline } from '@react-icons/all-files/ti/TiArrowBackOutline';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import PopoverFilters from './PopoverFilters';

const Header = () => {
  const location = useLocation();
  return (
    <div className="sticky top-0 z-10 px-8 py-6 shadow-sm bg-gray-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex space-x-2 text-lg font-thin tracking-wide uppercase">
          {location.pathname.match(/\/blog\//g) ? (
            <button onClick={() => navigate(-1)}>
              <TiArrowBackOutline className="w-7 h-7" />
            </button>
          ) : (
            <>
              <PopoverFilters />
              <span>Posts</span>
            </>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-lg font-thin tracking-wide uppercase">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
