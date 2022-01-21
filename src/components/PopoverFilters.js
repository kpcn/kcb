import * as React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { AiOutlineCloseSquare } from '@react-icons/all-files/ai/AiOutlineCloseSquare';
import TagLink from './TagLink';

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
            <Popover.Button className="dark:text-slate-50">
              {state?.activeTag && state?.activeTag?.toLowerCase() !== 'all' ? (
                <div className="relative mr-2">
                  {state?.totalPosts && (
                    <span className="absolute right-0 flex items-center justify-center w-5 h-5 px-1 -mt-2 -mr-4 text-xs text-white border border-gray-400 rounded-full right bg-cyan-500">
                      {state?.totalPosts}
                    </span>
                  )}
                  <span className="pb-1 italic font-light uppercase border-b border-gray-500 border-dashed dark:border-white">
                    {state?.activeTag}
                  </span>
                </div>
              ) : (
                <span className="pb-1 italic font-light uppercase border-b border-gray-500 border-dashed dark:border-white">
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
              <Popover.Panel className="absolute z-20 max-w-md px-5 pt-5 pb-4 mt-1 mr-6 space-y-2 bg-white rounded-md shadow-md md:mr-0 dark:bg-slate-300">
                {({ close }) => (
                  <>
                    <div className="flex items-start justify-between">
                      <div className="text-sm font-normal ">TAGS</div>
                      <button
                        className="text-gray-500 hover:text-gray-700 "
                        onClick={() => close()}
                      >
                        <AiOutlineCloseSquare className="w-6 h-6" />
                      </button>
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
                        <TagLink
                          key={tag.fieldValue}
                          tagName={tag.fieldValue}
                          totalCountByTag={tag.totalCount}
                          linkState={{
                            activeTag: tag.fieldValue,
                            totalPosts: tag.totalCount,
                          }}
                          className={
                            state?.activeTag?.toLowerCase() ===
                            tag.fieldValue.toLowerCase()
                              ? 'hidden'
                              : ''
                          }
                        />
                      ))}
                    </div>
                  </>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default PopoverFilters;
