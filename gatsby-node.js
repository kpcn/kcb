const path = require('path');
const _ = require('lodash');
const readingTime = require('reading-time');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog.js');
  const tagsTemplate = path.resolve('src/templates/tags.js');

  const result = await graphql(`
    {
      postsMdx: allMdx(
        sort: { fields: frontmatter___publishedAt, order: DESC }
        limit: 2000
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors);
    return;
  }

  const posts = result.data.postsMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    });
  });

  const tags = result.data.tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

// Customized reading time for Mdx & Md files
exports.onCreateNode = ({ actions, node }) => {
  const { createNodeField } = actions;

  const readingTimeOptions = {
    wordsPerMinute: 200,
    wordBound: function (c) {
      return ' \n\r\t'.includes(c);
    },
  };

  if (node.internal.type === 'Mdx') {
    createNodeField({
      name: 'readingTime',
      node,
      value: readingTime(node.rawBody, readingTimeOptions),
    });
  } else if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      name: 'readingTime',
      node,
      value: readingTime(node.rawMarkdownBody, readingTimeOptions),
    });
  }
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
