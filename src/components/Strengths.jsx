import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import StrengthsCard from "./Strengths/StrengthsCard";
import { strengthsList } from "../data/strangthsItem";

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

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

      <motion.div
        variants={cardsContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
      >
        {strengthsList.map((item) => (
          <motion.div key={item.title} variants={cardItem}>
            <StrengthsCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Strengths;
