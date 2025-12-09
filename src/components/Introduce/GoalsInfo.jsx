import InfoCard from "./InfoCard";
import { Goal } from "lucide-react";
import { nextGoals } from "../../data/indexData";
import clsx from "clsx";

const GoalsInfo = () => {
  return (
    <InfoCard
      title="Next Goals"
      icon={<Goal />}
      hoverColor="hover:border-orange-400"
      iconBgColor="from-orange-400 to-orange-600"
    >
      <ul className="space-y-3 text-white">
        {nextGoals.map((item) => (
          <li
            key={item.text}
            className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2"
          >
            <div className={clsx("w-1 h-7 rounded-full", item.color)} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </InfoCard>
  );
};

export default GoalsInfo;
