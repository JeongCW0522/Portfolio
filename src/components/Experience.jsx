import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import ExperienceCommunuty from "./Experience/ExperienceCommunuty";
import { Users, Award } from "lucide-react";
import ExperienceAward from "./Experience/ExperienceAward";

const experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-center items-center"
    >
      <PageTitle
        title="Experience"
        subTitle="Building skills through diverse experiences"
      />

      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl p-3 text-white">
            <Users />
          </div>
          <h2 className="text-white text-2xl">Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceCommunuty />
        </div>
      </div>

      <div className="max-w-6xl w-full mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-linear-to-br from-orange-400 to-orange-600 rounded-2xl p-3 text-white">
            <Award />
          </div>
          <h2 className="text-white text-2xl">Awards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceAward />
        </div>
      </div>
    </motion.div>
  );
};

export default experience;
