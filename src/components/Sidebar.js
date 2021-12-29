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
      <div className="flex flex-col mb-40 space-y-5">
        <Avatar name={name} />
        <p className="text-lg text-center font-pushster">{description}</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Sidebar;
