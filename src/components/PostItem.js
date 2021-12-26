import React from 'react';
import { Link } from 'gatsby';

const PostItem = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="block w-full px-3 py-2 space-y-2 rounded-md cursor-pointer hover:bg-slate-100 hover:grid-bg">
        <h1 className="text-xl tracking-wide">{post.frontmatter.title}</h1>
        <p>{post.excerpt}</p>
      </article>
    </Link>
  );
};

export default PostItem;
