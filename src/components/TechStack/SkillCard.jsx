import { motion } from "framer-motion";
import clsx from "clsx";

const SkillCard = ({ title, skills, color, hoverColor }) => {
  return (
    <div
      className={clsx(
        "w-full max-w-xl p-8 rounded-3xl border border-white/10 bg-linear-to-br from-[#271b38] to-[rgb(1,11,26)]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-103",
        hoverColor
      )}
    >
      <h2 className="text-white text-2xl font-semibold mb-6">{title}</h2>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-lg">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <motion.div
                className={clsx("h-full bg-linear-to-r rounded-full", color)}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
