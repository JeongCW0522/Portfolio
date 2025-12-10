import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";
import Project3 from "./Project/Project3";

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-center items-center"
    >
      <PageTitle
        title="Projects"
        subTitle="Problem-solving through creative development"
      />

      <Project1 />
      <Project2 />
      <Project3 />
    </motion.div>
  );
};

export default TechStack;
