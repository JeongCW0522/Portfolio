import InfoCard from "./InfoCard";
import { GraduationCap } from "lucide-react";

const AcademicInfo = () => {
  return (
    <InfoCard
      title="Academic"
      icon={<GraduationCap />}
      hoverColor="hover:border-purple-500"
      iconBgColor="from-blue-500 to-purple-500"
    >
      <p className="text-gray-500 text-sm mb-1 font-medium">전공</p>
      <p className="text-gray-400 mb-3">컴퓨터공학과</p>
      <p className="text-gray-500 text-sm mb-1 font-medium">학년</p>
      <p className="text-gray-400">3학년</p>
    </InfoCard>
  );
};

export default AcademicInfo;
