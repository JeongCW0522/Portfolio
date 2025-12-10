import { motion, AnimatePresence } from "framer-motion";
import PageTitle from "./layouts/PageTitle";
import Project1 from "../assets/project1.png";
import { ExternalLink, Calendar, Users } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const TechStack = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-center items-center"
    >
      <PageTitle
        title="Projects"
        subTitle="Problem-solving through creative development"
      />

      <div className="w-full max-w-6xl p-10 bg-linear-to-br from-blue-600 to-blue-400 border border-[#272727] rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl text-white font-medium">
            나만의 인사이트를 저장하는 북마크 플랫폼
          </h1>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={clsx(
              "text-white duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          >
            <ExternalLink />
          </button>
        </div>

        <p className="text-gray-300 text-xl mb-5">BookMark Platform</p>
        <div className="flex items-center gap-3">
          <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-200 gap-2">
            <Calendar size={18} />
            <span>2025.06 - 2025.08</span>
          </div>
          <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-200 gap-2">
            <Users size={18} /> <span>4명 (프론트엔드 개발)</span>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-10 -mb-10 -mx-10"
            >
              <div className="p-10 rounded-b-2xl bg-linear-to-br from-[#271b38] to-[rgb(1,11,26)] border border-white/10">
                <img
                  src={Project1}
                  alt="북마크 플랫폼"
                  className="w-150 h-80 rounded-lg"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TechStack;
