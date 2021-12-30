import * as React from 'react';
import { Link } from 'gatsby';

const PostItem = ({ post }) => {
  return (
    <article
      key={post.id}
      className="block w-full px-3 py-2 space-y-2 rounded-md hover:bg-slate-100"
    >
      <Link to={`/blog/${post.slug}`} className="cursor-pointer">
        <h1 className="text-xl tracking-wide">{post.frontmatter.title}</h1>
        <p>{post.excerpt}</p>
        <div className="flex flex-initial py-1 pb-2 space-x-2">
          {post.frontmatter.tags.map((tag) => (
            <span className="inline-block px-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-md">
              #<i className="uppercase">{tag}</i>
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
