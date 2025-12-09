import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import StrengthsCard from "./Strengths/StrengthsCard";
import { strengthsList } from "../data/strangthsItem";

const Strengths = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-center items-center"
    >
      <PageTitle
        title="Core Strengths"
        subTitle="Key competencies developed through projects and experiences"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-10">
        {strengthsList.map((item) => (
          <StrengthsCard key={item.title} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Strengths;
