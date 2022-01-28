import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen lg:flex-row">
        <div className="flex order-2 w-full lg:order-1 lg:top-0 lg:h-screen xl:w-3/12 2xl:w-2/12 lg:w-3/12 bg-gradient-to-tr from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-600">
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
