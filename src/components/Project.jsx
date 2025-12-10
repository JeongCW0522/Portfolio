import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import { projectItems } from "../data/projectItems";
import ProjectCard from "./Project/ProjectCard";

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

      <div className="flex flex-col items-center gap-7 w-full ">
        {projectItems.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
