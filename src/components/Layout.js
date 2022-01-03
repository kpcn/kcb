import * as React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KC's Blog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Pushster&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className="flex flex-col h-screen  lg:flex-row">
        <div className="flex order-2 w-full lg:order-1 lg:top-0 lg:h-screen xl:w-3/12 2xl:w-2/12 lg:w-3/12 bg-gradient-to-tr from-cyan-400 to-blue-500">
          <Sidebar />
        </div>
        <main className="flex-1 order-1 lg:flex lg:overflow-y-scroll lg:order-2 lg:w-9/12 xl:w-9/12 2xl:w-10/12 xl:bg-gray-900 grid-bg">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
