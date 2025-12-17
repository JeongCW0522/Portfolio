import { Calendar, Users } from "lucide-react";

const ProjectHeader = ({ item }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-2 max-sm:mr-10">
        <h1 className="text-2xl sm:text-3xl text-white font-medium break-keep">
          {item.title}
        </h1>
      </div>

      <p className="text-gray-200 text-base sm:text-xl mb-4 sm:mb-5 break-keep">
        {item.subTitle}
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
        <div className=" bg-blue-200/20 px-4 py-2 rounded-full flex items-center text-gray-100 gap-2">
          <Calendar size={18} />
          <span>{item.date}</span>
        </div>
        <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-100 gap-2">
          <Users size={18} /> <span>{item.people}</span>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
