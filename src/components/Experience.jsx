import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import ExperienceCard from "./Experience/ExperienceCard";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-10">
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default experience;
