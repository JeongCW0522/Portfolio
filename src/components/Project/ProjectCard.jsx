import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import ProjectHeader from "./ProjectHeader";
import ProjectModal from "./ProjectModal";
import ProjectCardView from "./ProjectCardView";
import { Calendar } from "lucide-react";

const getOffset = (index, activeIndex, length) => {
  const raw = index - activeIndex;
  const half = Math.floor(length / 2);
  if (raw > half) return raw - length;
  if (raw < -half) return raw + length;
  return raw;
};

const ProjectCard = ({ item, index, activeIndex, setActiveIndex, total }) => {
  const [isOpen, setIsOpen] = useState(false);
  const offset = getOffset(index, activeIndex, total);

  const handleClick = () => {
    if (offset === 0) {
      // 가운데 카드일 때만 모달 열기
      setIsOpen(true);
    } else {
      // 옆 카드일 때는 가운데로 이동
      setActiveIndex(index);
    }
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
        animate={{
          x: offset * 320,
          scale: offset === 0 ? 1 : 0.8,
          opacity: Math.abs(offset) > 1 ? 0 : 1,
          zIndex: offset === 0 ? 10 : 5,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
        className={clsx(
          "group absolute w-85 h-60 cursor-pointer overflow-hidden rounded-3xl border border-white/10"
        )}
      >
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h2 className="text-white text-lg font-semibold break-keep mb-2">
            {item.title}
          </h2>
          <div className="inline-flex w-fit px-3 py-1 rounded-full bg-white/20 text-sm items-center gap-2 text-white">
            <Calendar size={14} />
            {item.date}
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        item={item}
      />
    </>
  );
};

export default ProjectCard;
