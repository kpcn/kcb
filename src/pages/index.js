import * as React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="flex w-full overflow-y-scroll bg-gray-900 grid-bg">
        <div className="w-7/12 bg-gray-50">
          <Header />
          <div className="flex flex-col px-6 py-4 space-y-4 bg-gray-50">
            {data.allMdx.nodes.map((node) => (
              <PostItem key={node.id} post={node} />
            ))}
          </div>
        </div>
        <div className="w-5/12 "></div>
      </div>
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
      }
    }
  }
`;

export default IndexPage;
