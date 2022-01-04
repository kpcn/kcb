import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          socialHandles {
            github
            codesandbox
            twitter
          }
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
