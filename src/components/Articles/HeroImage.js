import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroImage = ({ imageSrc, desc, name, link }) => {
  return (
    <>
      <GatsbyImage
        image={getImage(imageSrc)}
        alt={desc}
        imgClassName="rounded-lg"
      />
      <span className="inline-block w-full text-sm italic font-thin text-center text-gray-400 ">
        {desc} by{' '}
        <a href={link} className="border-b border-gray-300 border-dashed">
          {name}
        </a>
      </span>
    </>
  );
};

export default HeroImage;
