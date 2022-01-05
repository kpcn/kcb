import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Avatar = ({ name }) => {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <StaticImage
          src="../images/icon.png"
          width={100}
          height={100}
          imgClassName="rounded-full border-2 border-gray-200"
          alt={name}
        />
      </Link>
    </div>
  );
};

export default Avatar;
