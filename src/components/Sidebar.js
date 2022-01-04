import * as React from 'react';
import Avatar from './Avatar';
import SocialLinks from './SocialLinks';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Sidebar = () => {
  const { author, description, socialHandles } = useSiteMetadata();
  return (
    <div className="flex flex-col justify-end w-full grid-bg">
      <div className="flex flex-col py-8 space-y-5 lg:mb-20 xl:mb-28 2xl:mb-36">
        <Avatar name={author} />
        <p className="px-6 text-xl text-center text-slate-700 font-pushster">
          {description}
        </p>
        <SocialLinks handles={socialHandles} />
      </div>
    </div>
  );
};

export default Sidebar;
