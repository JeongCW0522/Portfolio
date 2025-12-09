import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";

const experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <PageTitle
        title="Experience"
        subTitle="Building skills through diverse experiences"
      />
    </motion.div>
  );
};

export default experience;
