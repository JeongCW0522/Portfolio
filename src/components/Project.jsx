import { motion } from "framer-motion";
import { useState } from "react";
import PageTitle from "./layouts/PageTitle";
import { projectItems } from "../data/projectItems";
import ProjectCard from "./Project/ProjectCard";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 가운데부터 시작

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center p-5"
    >
      <PageTitle
        title="Projects"
        subTitle="Problem-solving through creative development"
      />

      <div className="relative w-full max-w-7xl h-60 flex items-center justify-center overflow-hidden">
        {projectItems.map((item, index) => (
          <ProjectCard
            key={item.title}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            total={projectItems.length}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
