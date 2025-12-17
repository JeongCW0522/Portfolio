import InfoCard from "./InfoCard";
import { Briefcase } from "lucide-react";
import { careerGoals } from "../../data/indexData";

const CareerGoalsInfo = () => {
  return (
    <InfoCard
      title="Career Goals"
      icon={<Briefcase />}
      hoverColor="hover:border-blue-400"
      iconBgColor="from-blue-600 to-blue-400"
    >
      <ul className="space-y-3 font-medium text-gray-500">
        {careerGoals.map((item) => (
          <li
            key={item.title}
            className="flex flex-col transform transition-transform duration-300 hover:translate-x-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-lg">{item.title}</span>
            </div>
            <span className="ml-6 text-sm text-gray-400 break-keep">
              {item.desc}
            </span>
          </li>
        ))}
      </ul>
    </InfoCard>
  );
};

export default CareerGoalsInfo;
