import { AiOutlineCalendar } from '@react-icons/all-files/ai/AiOutlineCalendar';
import { AiOutlineFieldTime } from '@react-icons/all-files/ai/AiOutlineFieldTime';
import { Link } from 'gatsby';
import Tags from './Tags';

const PostItem = ({ post }) => {
  return (
    <article
      key={post.id}
      className="flex flex-col w-full px-3 py-2 space-y-2 md:rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-50 hover:shadow-sm dark:hover:shadow-sm dark:hover:from-slate-600 dark:hover:to-slate-700"
    >
      <Link to={`/blog/${post.slug}`} className="cursor-pointer">
        <h1 className="mb-1 text-xl antialiased font-semibold tracking-wide text-gray-600 font-firamono dark:text-slate-50">
          {post.frontmatter.title}
        </h1>
        <div className="flex items-center py-1 text-gray-500 space-x-7 dark:text-slate-50">
          <div className="flex items-center space-x-2">
            <AiOutlineCalendar className="w-5 h-5" />
            <span className="italic">{post.frontmatter.publishedAt}</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineFieldTime className="w-5 h-5" />
            <span className="italic">{post.fields.readingTime.text}</span>
          </div>
        </div>
        <p className="py-1 text-lg antialiased font-normal text-slate-700 font-firamono dark:text-slate-50">
          {post.excerpt}
        </p>
      </Link>
      <Tags tags={post.frontmatter.tags} />
    </article>
  );
};

export default PostItem;
