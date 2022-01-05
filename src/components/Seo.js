import * as React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';
import BlogSchema from './BlogSchema';

const Seo = ({ isBlogPost, postData, postImage }) => {
  const defaultMeta = useSiteMetadata();
  const postMeta = postData || {};

  const title = postMeta.title
    ? `${postMeta.title} - ${defaultMeta.title}`
    : defaultMeta.title;
  const description = postMeta.summary || defaultMeta.description;
  const image = postImage
    ? `${defaultMeta.siteUrl}${postImage}`
    : defaultMeta.image;
  const url = postMeta.slug
    ? `${defaultMeta.siteUrl}/blog/${postMeta.slug}/`
    : defaultMeta.siteUrl;
  const publishedDate = isBlogPost ? postMeta.publishedDate : false;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={`@${defaultMeta.socialHandles.twitter}`}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <BlogSchema
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        publishedDate={publishedDate}
        siteUrl={defaultMeta.siteUrl}
        author={defaultMeta.author}
        organization={defaultMeta.organization}
        defaultTitle={defaultMeta.title}
      />
    </>
  );
};

export default Seo;
