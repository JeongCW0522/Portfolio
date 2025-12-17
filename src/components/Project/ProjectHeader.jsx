import { Calendar, Users, X } from "lucide-react";

const ProjectHeader = ({ item, onClose }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl text-white font-medium break-keep">
          {item.title}
        </h1>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition"
        >
          <X size={24} />
        </button>
      </div>

      <p className="text-gray-200 text-xl mb-5 break-keep">{item.subTitle}</p>
      <div className="flex items-center gap-3 mb-10">
        <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-100 gap-2">
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
