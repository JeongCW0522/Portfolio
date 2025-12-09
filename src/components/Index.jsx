import { motion } from "framer-motion";

import {
  GraduationCap,
  BookOpen,
  BookText,
  Goal,
  Briefcase,
} from "lucide-react";
import {
  careerGoals,
  interestItems,
  learningList,
  nextGoals,
} from "../data/indexData";
import ProfileCard from "./IndexPage/ProfileCard";
import InfoCard from "./IndexPage/InfoCard";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex justify-center items-start p-15">
        <div className="w-full max-w-6xl p-10 bg-linear-to-br from-[#271b38] to-[rgb(1,11,26)] border border-[#272727] rounded-2xl">
          <ProfileCard />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
            <InfoCard
              title="Academic"
              icon={<GraduationCap />}
              hoverColor="border-purple-500"
              iconBgColor="from-blue-500 to-purple-500"
            >
              <p className="text-gray-400 text-sm mb-1">전공</p>
              <p className="text-white mb-3">컴퓨터공학과</p>
              <p className="text-gray-400 text-sm mb-1">학년</p>
              <p className="text-white">3학년</p>
            </InfoCard>

            <InfoCard
              title="Interests"
              icon={<BookOpen />}
              hoverColor="border-pink-500"
              iconBgColor="from-purple-500 to-pink-500"
            >
              <div className="flex flex-wrap gap-3">
                {interestItems.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2.5 text-white rounded-full bg-linear-to-br from-blue-500/40 to-purple-500/40 border border-[#6b6a6a] hover:scale-110 transition duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </InfoCard>

            <InfoCard
              title="Learning"
              icon={<BookText />}
              hoverColor="border-green-300"
              iconBgColor="from-green-300 to-green-600"
            >
              <ul className="space-y-3 text-white">
                {learningList.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2"
                  >
                    <div className={`w-1 h-7 ${item.color} rounded-full`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard
              title="Next Goals"
              icon={<Goal />}
              hoverColor="border-orange-400"
              iconBgColor="from-orange-400 to-orange-600"
            >
              <ul className="space-y-3 text-white">
                {nextGoals.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2"
                  >
                    <div className={`w-1 h-7 ${item.color} rounded-full`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard
              title="Career Goals"
              icon={<Briefcase />}
              hoverColor="border-blue-400"
              iconBgColor="from-blue-600 to-blue-400"
            >
              <ul className="space-y-3 text-white">
                {careerGoals.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col transform transition-transform duration-300 hover:translate-x-2"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 ${item.dotColor} rounded-full`}
                      />
                      <span className="text-lg">{item.title}</span>
                    </div>
                    <span className="ml-6 text-sm text-gray-400 break-keep">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
