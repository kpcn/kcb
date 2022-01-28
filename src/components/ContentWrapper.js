import Header from './Header';

const ContentWrapper = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full bg-white xl:w-8/12 dark:bg-slate-600">
        <Header />
        <div className="flex flex-col px-3 py-4 space-y-4 bg-white md:px-6 dark:bg-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
