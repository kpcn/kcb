import * as React from 'react';
import { Link } from 'gatsby';

const PostItem = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="block w-full px-3 py-2 space-y-2 rounded-md cursor-pointer hover:bg-slate-100 hover:grid-bg">
        <h1 className="text-xl tracking-wide">{post.frontmatter.title}</h1>
        <p>{post.excerpt}</p>
        <div className="flex pb-2 space-x-2">
          {post.frontmatter.tags.map((tag) => (
            <span className="inline-block px-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-md">
              #<i className="uppercase">{tag}</i>
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
};

export default PostItem;
