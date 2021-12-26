import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KC's Blog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Pushster&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
        excerpt
      }
    }
  }
`;

export default IndexPage;
