import InfoCard from "./InfoCard";
import { BookText } from "lucide-react";
import { learningList } from "../../data/indexData";
import clsx from "clsx";

const LearningInfo = () => {
  return (
    <InfoCard
      title="Learning"
      icon={<BookText />}
      hoverColor="hover:border-green-300"
      iconBgColor="from-green-300 to-green-600"
    >
      <ul className="space-y-3 text-white">
        {learningList.map((item) => (
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

export default LearningInfo;
