import { motion } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import StrengthsCard from "./Strengths/StrengthsCard";
import { strengthsList } from "../data/strangthsItem";
import { Heart, Target, Users } from "lucide-react";
import RotatingValueCard from "./Strengths/RotatingValueCard";

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Strengths = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-center items-center"
    >
      <PageTitle
        title="Core Strengths"
        subTitle="Key competencies developed through projects and experiences"
      />

      <motion.div
        variants={cardsContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
      >
        {strengthsList.map((item) => (
          <motion.div key={item.title} variants={cardItem}>
            <StrengthsCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full max-w-6xl mt-20 rounded-3xl bg-bgColor border border-border shadow-lg p-12">
        <h2 className="text-center text-3xl text-purple-500 font-semibold mb-12">
          Core Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <RotatingValueCard
            title="Goal-Oriented"
            desc="명확한 목표를 설정하고 체계적으로 달성"
            icon={
              <div className="w-20 h-20 rounded-3xl bg-sky-400 flex items-center justify-center">
                <Target className="text-white w-8 h-8" />
              </div>
            }
          />

          <RotatingValueCard
            title="Passionate"
            desc="개발에 대한 열정으로 끊임없이 배우고 성장"
            icon={
              <div className="w-20 h-20 rounded-3xl bg-pink-400 flex items-center justify-center">
                <Heart className="text-white w-8 h-8" />
              </div>
            }
          />

          <RotatingValueCard
            title="Collaborative"
            desc="팀워크를 중시하며 함께 성장하는 것을 추구"
            icon={
              <div className="w-20 h-20 rounded-3xl bg-emerald-400 flex items-center justify-center">
                <Users className="text-white w-8 h-8" />
              </div>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Strengths;
