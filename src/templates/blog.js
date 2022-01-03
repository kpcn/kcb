import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';

import shortcodes from '../../src/mdx-shortcodes';
import HeroImage from '../components/Articles/HeroImage';

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="flex w-full">
        <div className="xl:w-8/12 bg-gray-50">
          <Header />
          <article className="px-6 pt-2 pb-10 space-y-2 md:px-8 bg-gray-50 font-firamono">
            <header className="py-2">
              <h1 className="pt-2 pb-6 text-2xl">
                {data.mdx.frontmatter.title}
              </h1>
              {data.mdx.frontmatter.hero_image && (
                <HeroImage
                  imageSrc={
                    data.mdx.frontmatter.hero_image.childImageSharp
                      .gatsbyImageData
                  }
                  alt={data.mdx.frontmatter.hero_image_desc}
                />
              )}
            </header>
            <section className="w-full prose xl:prose-lg max-w-fit">
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        publishedAt(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        hero_image_desc
        hero_image_credited_name
        hero_image_credited_link
      }
      body
    }
  }
`;

export default BlogTemplate;
