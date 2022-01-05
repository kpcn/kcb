import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          author
          siteUrl
          socialHandles {
            github
            codesandbox
            twitter
          }
          organization {
            name
            url
            logo
          }
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
