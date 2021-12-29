import * as React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import kebabCase from 'lodash/kebabCase';

const PopoverFilters = () => {
  const { state } = useLocation();
  const {
    allMdx: { group },
  } = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  return (
    <div>
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button className="">
              {state?.activeTag && state?.activeTag?.toLowerCase() !== 'all' ? (
                <div className="relative mr-2">
                  {state?.totalPosts && (
                    <span className="absolute right-0 flex items-center justify-center w-5 h-5 px-1 -mt-2 -mr-4 text-xs text-white border border-gray-400 rounded-full right bg-cyan-500">
                      {state?.totalPosts}
                    </span>
                  )}
                  <span className="pb-1 italic font-light uppercase border-b border-gray-500 border-dashed">
                    {state?.activeTag}
                  </span>
                </div>
              ) : (
                <span className="pb-1 italic font-light uppercase border-b border-gray-500 border-dashed">
                  All
                </span>
              )}
            </Popover.Button>
            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 max-w-md px-5 pt-5 pb-4 mt-1 space-y-2 bg-white border border-gray-100 rounded-md shadow-md">
                <div className="">
                  <div className="text-sm font-normal">TAGS</div>
                </div>
                <div className="flex flex-wrap">
                  <Link
                    to="/"
                    state={{ activeTag: 'All' }}
                    className={
                      state?.activeTag !== 'undefined'
                        ? state?.activeTag?.toLowerCase() === 'all'
                          ? 'hidden'
                          : ''
                        : 'hidden'
                    }
                  >
                    <div className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                      #All
                    </div>
                  </Link>
                  {group.map((tag) => (
                    <Link
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      key={tag.fieldValue}
                      state={{
                        activeTag: tag.fieldValue,
                        totalPosts: tag.totalCount,
                      }}
                      className={
                        state?.activeTag?.toLowerCase() ===
                        tag.fieldValue.toLowerCase()
                          ? 'hidden'
                          : ''
                      }
                    >
                      <div className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                        #{tag.fieldValue}{' '}
                        <span className="px-1 text-sm text-white bg-gray-700 rounded-md">
                          {tag.totalCount}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default PopoverFilters;
