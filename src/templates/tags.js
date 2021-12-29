import * as React from 'react';// import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Header from '../components/Header'
import PostItem from '../components/PostItem'

const Tags = ({ data }) => {
  return (
    <Layout>
      <div className="flex w-full overflow-y-scroll bg-gray-900 grid-bg">
        <div className="w-7/12 bg-gray-50">
          <Header />
          <div className="flex flex-col px-6 py-4 space-y-4 bg-gray-50">
            {data.allMdx.edges.map(({ node }) => (
              <PostItem key={node.id} post={node} />
            ))}
          </div>
        </div>
        <div className="w-5/12 "></div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: {fields: frontmatter___tags, order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          id
          slug
          frontmatter {
            title
            tags
          }
          excerpt
        }
      }
    }
  }
`

export default Tags
