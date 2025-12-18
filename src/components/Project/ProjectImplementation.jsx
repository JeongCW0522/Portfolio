import clsx from "clsx";
import { ChevronsLeftRight } from "lucide-react";

const ProjectImplementation = ({ item }) => {
  return (
    <>
      <div className="flex items-center gap-2 mt-10 mb-5">
        <ChevronsLeftRight className="text-green-500" />
        <h1 className="text-xl text-white">Implementation</h1>
      </div>

      <div className="flex flex-col gap-5">
        {item.implementation.map((implement, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div
              className={clsx(
                "min-w-2 h-2 rounded-full bg-linear-to-r",
                item.bgColor
              )}
            />
            <span className="text-gray-300 leading-5">{implement}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectImplementation;
