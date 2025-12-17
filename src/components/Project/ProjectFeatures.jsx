import { CircleCheckBig, Zap } from "lucide-react";

const ProjectFeatures = ({ item }) => {
  return (
    <div className="flex gap-10">
      <img
        src={item.image}
        alt="북마크 플랫폼"
        className="min-w-150 h-90 rounded-lg"
      />
      <div className="w-full">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="text-purple-500" />
          <h1 className="text-xl text-white">Key Features</h1>
        </div>
        <ul className="space-y-3">
          {item.keyFeatures.map((featuere, idx) => (
            <li
              key={idx}
              className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 rounded-xl"
            >
              <CircleCheckBig size={20} className="text-green-400" />
              <span className="text-gray-300 break-keep leading-5">
                {featuere}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectFeatures;
