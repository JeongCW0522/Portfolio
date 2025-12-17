import { Calendar, Users } from "lucide-react";

const ProjectCardView = ({ item }) => {
  return (
    <div>
      <h1 className="text-2xl text-white font-medium mb-2">{item.title}</h1>

      <p className="text-gray-200 mb-4">{item.subTitle}</p>

      <div className="flex gap-3">
        <div className="px-3 py-1 rounded-full bg-white/20 text-sm flex items-center gap-2 text-white">
          <Calendar size={14} />
          {item.date}
        </div>
        <div className="px-3 py-1 rounded-full bg-white/20 text-sm flex items-center gap-2 text-white">
          <Users size={14} />
          {item.people}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardView;
