import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Avatar = ({ name, siteUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            height: 100
            width: 100
            placeholder: BLURRED
          )
        }
      }
    }
  `);
  return (
    <div className="flex justify-center">
      <GatsbyImage
        imgClassName="rounded-full border-2 border-gray-200"
        image={data.file.childImageSharp.gatsbyImageData}
        alt={name}
      />
    </div>
  );
};

export default Avatar;
