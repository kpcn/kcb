import * as React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="sticky top-0 flex flex-row w-2/12 h-screen bg-gradient-to-tr from-cyan-400 to-blue-500">
        <Sidebar />
      </div>
      <main className="flex w-10/12 overflow-hidden ">{children}</main>
    </div>
  );
};

export default Layout;
