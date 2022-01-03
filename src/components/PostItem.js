import * as React from 'react';
import { BsTag } from '@react-icons/all-files/bs/BsTag';
import { Link } from 'gatsby';

const PostItem = ({ post }) => {
  return (
    <article
      key={post.id}
      className="flex flex-col w-full px-3 py-2 space-y-2 md:rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-50 hover:shadow-sm"
    >
      <Link to={`/blog/${post.slug}`} className="cursor-pointer">
        <h1 className="text-xl antialiased font-semibold tracking-wide text-gray-600 font-firamono mb-1">
          {post.frontmatter.title}
        </h1>
        <p className="py-1 text-lg antialiased font-normal text-slate-700 font-firamono">
          {post.excerpt}
        </p>
      </Link>
      <div className="flex py-1 pb-2 space-x-2 items-center">
        <BsTag />
        {post.frontmatter.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2 text-xs font-thin text-justify text-gray-700 bg-slate-50 rounded-md "
          >
            #<i className="uppercase">{tag}</i>
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostItem;
