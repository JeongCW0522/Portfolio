import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TbBrandGithub } from "react-icons/tb";

const ProjectGithubLink = ({ url }) => {
  if (!url) return null;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 6 }}
      className="mt-12 flex items-center justify-between gap-4 p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md text-white"
    >
      <div className="flex items-center gap-3 text-white">
        <TbBrandGithub className="w-5 h-5" />
        <span className="font-semibold">View on GitHub</span>
      </div>

      <ArrowUpRight className="w-5 h-5 opacity-70 text-white" />
    </motion.a>
  );
};

export default ProjectGithubLink;
