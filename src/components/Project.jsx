import { motion } from "framer-motion";
import { useState } from "react";
import PageTitle from "./layouts/PageTitle";
import { projectItems } from "../data/projectItems";
import ProjectCard from "./Project/ProjectCard";
import ProjectModal from "./Project/ProjectModal";
import { Calendar } from "lucide-react";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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

      {/* 🖥 DESKTOP */}
      <div className="relative w-full max-w-7xl h-60 hidden sm:flex items-center justify-center overflow-hidden">
        {projectItems.map((item, index) => (
          <ProjectCard
            key={item.title}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            total={projectItems.length}
            onOpenModal={openModal}
          />
        ))}
      </div>

      {/* 📱 MOBILE */}
      <div className="w-full max-w-2xl flex flex-col gap-6 sm:hidden">
        {projectItems.map((item) => (
          <div
            key={item.title}
            onClick={() => openModal(item)}
            className="relative h-64 rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-0 p-4">
              <h2 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h2>
              <div className="inline-flex items-center gap-2 text-sm text-white bg-white/20 px-3 py-1 rounded-full">
                <Calendar size={14} />
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedProject}
      />
    </motion.div>
  );
};

export default Project;
