import clsx from "clsx";

const StrengthsCard = ({
  title,
  subTitle,
  desc,
  content1,
  content2,
  bgColor,
}) => {
  return (
    <div className="w-full max-w-xl p-8 rounded-3xl bg-bgColor shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border hover:scale-103">
      <div
        className={clsx("-m-8 p-8 bg-linear-to-r rounded-t-3xl mb-8", bgColor)}
      >
        <h1 className="text-white text-3xl mb-1">{title}</h1>
        <p className="text-gray-100 mb-6">{subTitle}</p>
        <p className="text-white break-keep leading-5">{desc}</p>
      </div>

      <div className="flex flex-col space-y-4">
        <h3 className="text-gray-500 font-medium text-lg">Examples:</h3>
        <div className="flex items-center gap-3">
          <div className="min-w-2 h-2 bg-gray-400 rounded-full" />
          <p className="text-gray-500 break-keep leading-5">{content1}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <p className="text-gray-500 break-keep leading-5">{content2}</p>
        </div>
      </div>
    </div>
  );
};

export default StrengthsCard;
