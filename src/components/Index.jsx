import { motion } from "framer-motion";
import ProfileCard from "./Introduce/ProfileCard";
import AcademicInfo from "./Introduce/AcademicInfo";
import InterestsInfo from "./Introduce/InterestsInfo";
import LearningInfo from "./Introduce/LearningInfo";
import GoalsInfo from "./Introduce/GoalsInfo";
import CareerGoalsInfo from "./Introduce/CareerGoalsInfo";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex justify-center items-center p-15"
    >
      <div className="w-full max-w-6xl p-10 bg-linear-to-br from-[#271b38] to-[rgb(1,11,26)] border border-[#272727] rounded-3xl">
        <ProfileCard />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
          <AcademicInfo />
          <InterestsInfo />
          <LearningInfo />
          <GoalsInfo />
          <CareerGoalsInfo />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
