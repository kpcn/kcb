import { AiOutlineTags } from '@react-icons/all-files/ai/AiOutlineTags';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const Tags = ({ tags }) => {
  return (
    <div className="flex items-center py-1 pb-2 space-x-2">
      <AiOutlineTags className="w-5 h-5 text-gray-500 dark:text-slate-50" />
      <div className="flex flex-wrap items-center">
        {tags.map((tag, id) => {
          return (
            <Link
              key={id}
              to={`/tags/${kebabCase(tag)}`}
              state={{ activeTag: tag }}
            >
              <span
                key={tag}
                className="inline-block px-2 mr-2 text-xs font-thin tracking-widest text-justify text-gray-700 rounded-md dark:text-white bg-slate-50 hover:shadow-md hover:scale-105 hover:bg-slate-100 dark:bg-slate-500 dark:hover:bg-slate-100 dark:hover:text-slate-500"
              >
                #<i className="uppercase">{tag}</i>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
