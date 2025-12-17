import { motion, AnimatePresence } from "framer-motion";
import ProjectFeatures from "./ProjectFeatures";
import ProjectTechStack from "./ProjectTechStack";
import ProjectMotivation from "./ProjectMotivation";
import ProjectImplementation from "./ProjectImplementation";
import ProjectTrouble from "./ProjectTrouble";
import ProjectResults from "./ProjectResults";
import ProjectGithubLink from "./ProjectGitHubLink";
import { X } from "lucide-react";
import ProjectHeader from "./ProjectHeader";
import clsx from "clsx";

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: { duration: 0.25 },
  },
};

const ProjectModal = ({ isOpen, onClose, item }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center"
          onClick={onClose}
        >
          <motion.div
            variants={modal}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-xl:w-[90%] max-h-[85vh] overflow-y-auto hide-scrollbar rounded-3xl p-10 bg-linear-to-br from-[#4c3769] to-[rgb(5,37,85)]"
          >
            <ProjectHeader item={item} onClose={onClose} />

            <ProjectFeatures item={item} />
            <ProjectTechStack item={item} />
            <ProjectMotivation item={item} />
            <ProjectImplementation item={item} />
            <ProjectTrouble item={item} />
            <ProjectResults item={item} />
            <ProjectGithubLink url={item.gitHub} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
