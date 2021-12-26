import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div className="flex w-full overflow-y-scroll bg-gray-900 grid-bg">
        <div className="w-7/12 bg-gray-50">
          <Header />
          <div className="px-6 py-2 space-y-2 bg-gray-50">
            <article className="">
              <h1 className="text-xl tracking-wide">
                {data.mdx.frontmatter.title}
              </h1>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </article>
          </div>
        </div>
        <div className="w-5/12 "></div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
