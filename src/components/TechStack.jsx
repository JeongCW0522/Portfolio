import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import { skillCards } from "../data/skillItems";
import SkillCard from "./TechStack/SkillCard";

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-center items-center p-5"
    >
      <PageTitle
        title="Tech Stack"
        subTitle="Technologies I've mastered through various projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {skillCards.map((card) => (
          <SkillCard
            key={card.title}
            title={card.title}
            color={card.color}
            skills={card.skills}
            hoverColor={card.hoverColor}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
