import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Avatar = ({ name }) => {
  return (
    <div className="flex justify-center">
      <StaticImage
        src="../images/avatar.jpg"
        width={100}
        height={100}
        imgClassName="rounded-full border-2 border-gray-200"
        alt={name}
      />
    </div>
  );
};

export default Avatar;
