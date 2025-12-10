import { Lightbulb } from "lucide-react";

const ProjectMotivation = ({ item }) => {
  return (
    <>
      <div className="flex items-center gap-2 mt-10 mb-5">
        <Lightbulb className="text-yellow-500" />
        <h1 className="text-xl text-white">Motivation</h1>
      </div>
      <p className="text-gray-300 break-keep leading-5">{item.motivation}</p>
    </>
  );
};

export default ProjectMotivation;
