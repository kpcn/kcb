import * as React from 'react';
import { RiGithubLine } from '@react-icons/all-files/ri/RiGithubLine';
import { RiTwitterLine } from '@react-icons/all-files/ri/RiTwitterLine';
import { FiCodesandbox } from '@react-icons/all-files/fi/FiCodesandbox';
import SocialLink from './SocialLink';

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center px-6 space-x-6">
      <SocialLink url="https://github.com/kpcn">
        <RiGithubLine className="w-8 h-8 " />
      </SocialLink>
      <SocialLink url="https://codesandbox.io/u/kpcn">
        <FiCodesandbox className=" w-7 h-7" />
      </SocialLink>
      <SocialLink url="https://twitter.com/kchancnk">
        <RiTwitterLine className="w-8 h-8 " />
      </SocialLink>
    </div>
  );
};

export default SocialLinks;
