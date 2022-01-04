import * as React from 'react';
import { RiGithubLine } from '@react-icons/all-files/ri/RiGithubLine';
import { RiTwitterLine } from '@react-icons/all-files/ri/RiTwitterLine';
import { FiCodesandbox } from '@react-icons/all-files/fi/FiCodesandbox';
import SocialLink from './SocialLink';

const SocialLinks = ({ handles }) => {
  const { github, codesandbox, twitter } = handles;
  return (
    <div className="flex items-center justify-center px-6 space-x-6">
      <SocialLink url={`https://github.com/${github}`}>
        <RiGithubLine className="w-8 h-8 " />
      </SocialLink>
      <SocialLink url={`https://codesandbox.io/u/${codesandbox}`}>
        <FiCodesandbox className=" w-7 h-7" />
      </SocialLink>
      <SocialLink url={`https://twitter.com/${twitter}`}>
        <RiTwitterLine className="w-8 h-8 " />
      </SocialLink>
    </div>
  );
};

export default SocialLinks;
