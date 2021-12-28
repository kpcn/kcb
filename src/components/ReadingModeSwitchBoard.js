import * as React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { GiFlexibleLamp } from '@react-icons/all-files/gi/GiFlexibleLamp';
import { RiLoaderLine } from '@react-icons/all-files/ri/RiLoaderLine';

const ReadingModeSwitchBoard = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="">
              <GiFlexibleLamp className="w-6 h-6" />
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
              <Popover.Panel className="absolute right-0 z-20 max-w-md px-5 pt-5 pb-4 mt-1 space-y-2 bg-white border border-gray-100 rounded-md shadow-md">
                <div className="flex flex-col space-y-3">
                  <ul className="flex flex-col p-2 space-y-5">
                    <li className="flex items-center justify-center space-x-3">
                      <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full hover:border-gray-400 hover:ring-2 ring-cyan-400 ring-offset-2">
                        <RiLoaderLine className="w-6 h-6" />
                      </button>
                      <span className="">Light</span>
                    </li>
                    <li className="flex items-center justify-center space-x-3">
                      <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-slate-400 sepia hover:ring-2 ring-cyan-400 ring-offset-2">
                        <RiLoaderLine className="hidden w-6 h-6" />
                      </button>
                      <span>Sepia</span>
                    </li>
                    <li className="flex items-center justify-center space-x-3">
                      <button className="flex items-center justify-center w-10 h-10 bg-gray-700 border border-gray-300 rounded-full hover:ring-2 ring-gray-900 ring-offset-2">
                        <RiLoaderLine className="hidden w-6 h-6" />
                      </button>
                      <span>Dark</span>
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default ReadingModeSwitchBoard;
