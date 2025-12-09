import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <PageTitle
        title="Tech Stack"
        subTitle="Technologies I've mastered through various projects"
      />
    </motion.div>
  );
};

export default TechStack;
