import { createRef, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { AiOutlineCalendar } from '@react-icons/all-files/ai/AiOutlineCalendar';
import { AiOutlineFieldTime } from '@react-icons/all-files/ai/AiOutlineFieldTime';
import Header from '@components/Header';
import Layout from '@components/Layout';

import shortcodes from '@shortcodes';
import HeroImage from '@components/Articles/HeroImage';
import Tags from '@components/Tags';
import Seo from '@components/Seo';
import Comment from '@components/Comment';

const BlogTemplate = ({ data }) => {
  const commentBox = createRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'kpcn/kcb');
    script.setAttribute('issue-term', 'title');
    script.setAttribute('id', 'utterances');
    script.setAttribute('theme', `github-light`);
    script.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(script);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, [commentBox]);

  return (
    <Layout>
      <Seo
        postData={{ ...data.mdx.frontmatter, slug: data.mdx.slug }}
        isBlogPost
      />
      <div className="flex w-full">
        <div className="bg-white xl:w-8/12 dark:bg-slate-600">
          <Header />
          <article className="flex-1 px-6 pt-2 pb-10 space-y-2 bg-white md:px-8 font-firamono dark:bg-slate-600">
            <header className="py-2">
              <h1 className="pt-2 pb-1 text-2xl dark:text-slate-50">
                {data.mdx.frontmatter.title}
              </h1>
              <div className="flex items-center py-1 pb-4 text-gray-500 space-x-7 dark:text-slate-50">
                <div className="flex items-center space-x-2">
                  <AiOutlineCalendar className="w-5 h-5" />
                  <span className="text-sm italic md:text-base">
                    {data.mdx.frontmatter.publishedAt}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <AiOutlineFieldTime className="w-5 h-5" />
                  <span className="text-sm italic md:text-base">
                    {data.mdx.fields.readingTime.text}
                  </span>
                </div>
              </div>
              {data.mdx.frontmatter.hero_image && (
                <HeroImage
                  imageSrc={
                    data.mdx.frontmatter.hero_image.childImageSharp
                      .gatsbyImageData
                  }
                  desc={data.mdx.frontmatter.hero_image_desc}
                  name={data.mdx.frontmatter.hero_image_credited_name}
                  link={data.mdx.frontmatter.hero_image_credited_link}
                />
              )}
            </header>
            <section className="w-full pb-6 prose xl:prose-lg max-w-fit dark:prose-invert dark:prose-code:bg-slate-200 dark:prose-pre:bg-slate-200 ">
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </section>
            <Tags tags={data.mdx.frontmatter.tags} />
            <Comment commentBox={commentBox} />
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
        tags
        publishedAt(formatString: "MMMM DD, YYYY")
        summary
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        hero_image_desc
        hero_image_credited_name
        hero_image_credited_link
      }
      slug
      fields {
        readingTime {
          text
        }
      }
      body
    }
  }
`;

export default BlogTemplate;
