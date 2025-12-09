import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";

const Strengths = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <PageTitle
        title="Core Strengths"
        subTitle="Key competencies developed through projects and experiences"
      />
    </motion.div>
  );
};

export default Strengths;
