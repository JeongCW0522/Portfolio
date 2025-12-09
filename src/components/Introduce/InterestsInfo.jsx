import InfoCard from "./InfoCard";
import { BookOpen } from "lucide-react";
import { interestItems } from "../../data/indexData";

const InterestsInfo = () => {
  return (
    <InfoCard
      title="Interests"
      icon={<BookOpen />}
      hoverColor="hover:border-pink-500"
      iconBgColor="from-purple-500 to-pink-500"
    >
      <div className="flex flex-wrap gap-3">
        {interestItems.map((item) => (
          <span
            key={item}
            className="px-4 py-2.5 text-white rounded-full bg-linear-to-br from-blue-500/40 to-purple-500/40 border border-[#6b6a6a] hover:scale-110 transition duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </InfoCard>
  );
};

export default InterestsInfo;
