import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import ProjectHeader from "./ProjectHeader";
import ProjectModal from "./ProjectModal";
import ProjectCardView from "./ProjectCardView";

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
          scale: offset === 0 ? 1 : 0.85,
          opacity: Math.abs(offset) > 1 ? 0 : 1,
          zIndex: offset === 0 ? 10 : 5,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
        className={clsx(
          "absolute w-[300px] cursor-pointer p-8 rounded-3xl border border-border bg-linear-to-r",
          item.bgColor
        )}
      >
        <ProjectCardView item={item} />
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
