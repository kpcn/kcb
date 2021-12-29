import * as React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
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
      <div className="sticky top-0 flex flex-row w-2/12 h-screen bg-gradient-to-tr from-cyan-400 to-blue-500">
        <Sidebar />
      </div>
      <main className="flex w-10/12 overflow-hidden">{children}</main>
    </div>
  );
};

export default Layout;
