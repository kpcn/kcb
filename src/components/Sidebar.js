import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Avatar from './Avatar';
import SocialLinks from './SocialLinks';

const Sidebar = () => {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(graphql`
    query GetMeta {
      site {
        siteMetadata {
          description
          name
          title
        }
      }
    }
  `);
  const { name, description } = meta;
  return (
    <div className="flex flex-col justify-end w-full grid-bg">
      <div className="flex flex-col py-8 space-y-5 lg:mb-20 xl:mb-28 2xl:mb-36">
        <Avatar name={name} />
        <p className="px-6 text-xl text-center text-slate-700 font-pushster">
          {description}
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Sidebar;
