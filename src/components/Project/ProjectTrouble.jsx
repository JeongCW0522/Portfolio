import { CircleAlert } from "lucide-react";

const ProjectTrouble = ({ item }) => {
  return (
    <>
      <div className="flex items-center gap-2 mt-10 mb-5">
        <CircleAlert className="text-orange-500" />
        <h1 className="text-xl text-white">Troubleshooting</h1>
      </div>

      <div className="space-y-5">
        {item.troubleshooting.map((t, i) => (
          <div
            key={i}
            className="bg-orange-400/10 p-6 rounded-xl border border-orange-500/40 space-y-3"
          >
            <div className="flex gap-2">
              <span className="text-orange-500">Problem:</span>
              <span className="text-gray-300 break-keep leading-5">
                {t.problem}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="text-green-400">Solution:</span>
              <span className="text-gray-300 break-keep leading-5">
                {t.solution}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectTrouble;
