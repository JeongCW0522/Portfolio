const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-15">
      <h1 className="text-4xl sm:text-6xl bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent pb-3">
        {title}
      </h1>
      <p className="mt-1 sm:mt-4 text-gray-400 text-lg text-center break-keep">
        {subTitle}
      </p>
    </div>
  );
};

export default PageTitle;
