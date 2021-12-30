import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroImage = ({ imageSrc, alt }) => {
  return <GatsbyImage image={getImage(imageSrc)} alt={alt} />;
};

export default HeroImage;
