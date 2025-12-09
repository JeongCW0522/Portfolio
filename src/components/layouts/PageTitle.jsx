const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center p-15">
      <h1 className="text-6xl bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent pb-3">
        {title}
      </h1>
      <p className="mt-4 text-gray-400 text-lg">{subTitle}</p>
    </div>
  );
};

export default PageTitle;
