import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import ContentWrapper from '../components/ContentWrapper';
import Seo from '../components/Seo';

const Tags = ({ data }) => {
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

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: frontmatter___tags, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
          id
          slug
          excerpt
        }
      }
    }
  }
`;

export default Tags;
