import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import ContentWrapper from '../components/ContentWrapper';
import Seo from '../components/Seo';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <ContentWrapper>
        {data.allMdx.edges.map(({ node }) => (
          <PostItem key={node.id} post={node} />
        ))}
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___publishedAt, order: DESC }) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            title
            tags
            publishedAt(formatString: "MMMM DD, YYYY")
          }
          slug
          id
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
