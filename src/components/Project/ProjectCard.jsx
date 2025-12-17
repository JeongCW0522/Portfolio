import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import ProjectHeader from "./ProjectHeader";
import ProjectFeatures from "./ProjectFeatures";
import ProjectTechStack from "./ProjectTechStack";
import ProjectMotivation from "./ProjectMotivation";
import ProjectImplementation from "./ProjectImplementation";
import ProjectResults from "./ProjectResults";
import ProjectTrouble from "./ProjectTrouble";
import ProjectGithubLink from "./ProjectGitHubLink";

const ProjectCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div
      className={clsx(
        "w-full max-w-6xl p-10 bg-linear-to-r border border-border rounded-3xl overflow-hidden",
        item.bgColor
      )}
    >
      <ProjectHeader item={item} isOpen={isOpen} setIsOpen={setIsOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-10 -mb-10 -mx-10"
          >
            <div className="p-10 rounded-b-2xl bg-linear-to-br from-[#4c3769] to-[rgb(5,37,85)]">
              <ProjectFeatures item={item} />
              <ProjectTechStack item={item} />
              <ProjectMotivation item={item} />
              <ProjectImplementation item={item} />
              <ProjectTrouble item={item} />
              <ProjectResults item={item} />
              <ProjectGithubLink url={item.gitHub} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
