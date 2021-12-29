import * as React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'

import shortcodes from '../../src/mdx-shortcodes';

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="flex w-full overflow-y-scroll bg-gray-900 grid-bg">
        <div className="w-7/12 bg-gray-50">
          <Header />
          <div className="px-6 py-2 space-y-2 bg-gray-50">
            <article>
              <h1 className="text-xl tracking-wide">
                {data.mdx.frontmatter.title}
              </h1>
              <GatsbyImage
                image={getImage(
                  data.mdx.frontmatter.hero_image.childImageSharp
                    .gatsbyImageData
                )}
                alt={data.mdx.frontmatter.hero_image_desc}
              />
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </article>
          </div>
        </div>
        <div className="w-5/12 "></div>
      </div>
    </Layout>
  )
}

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


export default BlogTemplate
