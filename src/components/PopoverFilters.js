import * as React from 'react';
import { Popover, Transition } from '@headlessui/react';

const PopoverFilters = () => {
  return (
    <div>
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button className="italic font-light uppercase border-b border-gray-500 border-dashed">
              All
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
                  <div className="text-sm font-normal">Filter by:</div>
                </div>
                <div className="flex flex-wrap ">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                    #javascript
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                    #es6
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                    #react
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                    #typescript
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                    #gatsby
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium text-justify text-gray-700 bg-gray-200 rounded-3xl">
                    #nextjs
                  </span>
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
