import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import ContentWrapper from '../components/ContentWrapper';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <ContentWrapper>
        {data.allMdx.nodes.map((node) => (
          <PostItem key={node.id} post={node} />
        ))}
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___publishedAt, order: DESC }) {
      nodes {
        frontmatter {
          title
          publishedAt(formatString: "MMMM DD, YYYY")
          tags
        }
        id
        slug
        excerpt
        timeToRead
      }
    }
  }
`;

export default IndexPage;
