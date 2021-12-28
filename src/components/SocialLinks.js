import React from 'react';
import { RiGithubLine } from '@react-icons/all-files/ri/RiGithubLine';
import { RiTwitterLine } from '@react-icons/all-files/ri/RiTwitterLine';
import { FiCodesandbox } from '@react-icons/all-files/fi/FiCodesandbox';

const IconLink = ({ url, children }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center px-6 space-x-6">
      <IconLink url="https://github.com/kpcn">
        <RiGithubLine className="w-8 h-8 " />
      </IconLink>
      <IconLink url="https://codesandbox.io/u/kpcn">
        <FiCodesandbox className=" w-7 h-7" />
      </IconLink>
      <IconLink url="https://twitter.com/kchancnk">
        <RiTwitterLine className="w-8 h-8 " />
      </IconLink>
    </div>
  );
};

export default SocialLinks;
