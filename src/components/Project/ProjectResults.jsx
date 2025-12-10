import { Heart, TrendingUp } from "lucide-react";

const ProjectResults = ({ item }) => {
  return (
    <div>
      {" "}
      <div className="flex items-stretch gap-5 mt-10 mb-5">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-blue-500" />
            <h1 className="text-xl text-white">Results</h1>
          </div>
          <div className="bg-blue-400/10 p-6 space-y-5 rounded-xl border border-blue-500/40">
            <p className="text-gray-300 break-keep leading-5">{item.results}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Heart className="text-rose-500" />
            <h1 className="text-xl text-white">Reflection</h1>
          </div>
          <div className="bg-rose-400/10 p-6 space-y-5 rounded-xl border border-rose-500/40">
            <p className="text-gray-300 break-keep leading-5">
              {item.reflection}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-10 mb-5">
        <TrendingUp className="text-purple-500" />
        <h1 className="text-xl text-white">Future Improvements</h1>
      </div>
      <div className="flex gap-3">
        {item.futureImprovements.map((future, idx) => (
          <div
            key={idx}
            className="bg-purple-400/15 border border-purple-400/40 flex items-center gap-3 p-4 py-3 rounded-full text-white hover:scale-105 transition"
          >
            {future}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectResults;
