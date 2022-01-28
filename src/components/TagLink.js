import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

function TagLink({ tagName, totalCountByTag, linkState, className }) {
  return (
    <Link
      to={`/tags/${kebabCase(tagName)}/`}
      key={tagName}
      state={linkState}
      className={className}
    >
      <div className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
        #{tagName}{' '}
        <span className="px-1 text-sm text-white bg-gray-700 rounded-md">
          {totalCountByTag}
        </span>
      </div>
    </Link>
  );
}

export default TagLink;
