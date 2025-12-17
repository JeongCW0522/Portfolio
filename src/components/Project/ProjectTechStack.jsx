import { Layers } from "lucide-react";

const ProjectTechStack = ({ item }) => {
  return (
    <>
      <div className="flex items-center gap-2 mt-10 mb-3">
        <Layers className="text-blue-500" />
        <h1 className="text-xl text-white">Tech Stack</h1>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {item.techStack.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white/15 border border-white/10 flex items-center text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-white hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectTechStack;
