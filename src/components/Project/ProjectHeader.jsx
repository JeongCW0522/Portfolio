import clsx from "clsx";
import { Calendar, ExternalLink, Users } from "lucide-react";

const ProjectHeader = ({ item, isOpen, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl text-white font-medium">{item.title}</h1>
        <ExternalLink
          className={clsx(
            "text-white duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </div>

      <p className="text-gray-200 text-xl mb-5">{item.subTitle}</p>
      <div className="flex items-center gap-3">
        <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-100 gap-2">
          <Calendar size={18} />
          <span>{item.date}</span>
        </div>
        <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-100 gap-2">
          <Users size={18} /> <span>{item.people}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
