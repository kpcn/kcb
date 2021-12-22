import * as React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
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
      <main className="flex h-screen">
        <div className="m-auto">
          <h1 className="text-3xl font-bold antialiased tracking-wide text-center font-pushster text-purple-700">
            KC's Blog
          </h1>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
