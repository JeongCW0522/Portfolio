import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import {
  GraduationCap,
  BookOpen,
  BookText,
  Goal,
  Briefcase,
} from "lucide-react";
import { interestItems } from "../data/indexData";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex justify-center items-start p-15">
        <div className="w-full max-w-6xl p-10 bg-linear-to-br from-[#271b38] to-[rgb(1,11,26)] border border-[#272727] rounded-2xl">
          <h1 className="text-4xl font-semibold text-gray-400 mb-15">
            My Profile
          </h1>
          <div className="flex items-center gap-10">
            <div className="h-64 w-64 rounded-full bg-linear-to-tr from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src={profileImg}
                alt="profile"
                className="h-60 w-60 rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white text-3xl font-semibold mb-3">정찬원</h3>
              <p className="text-gray-400 text-lg">
                안녕하세요! 더 나은 사용자 경험을 만드는 프론트엔드 개발자가
                <br />
                되기 위해 노력하고 있습니다. <br />
                계속해서 새로운 기술을 배우고 성장하는 개발자가 되는 것을 목표로
                하고 있습니다.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-103 hover:border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-br from-blue-500 to-purple-500 rounded-xl p-2 text-white">
                  <GraduationCap />
                </div>
                <h2 className="text-white text-xl font-semibold">Academic</h2>
              </div>
              <p className="text-gray-400 text-sm mb-1">전공</p>
              <p className="text-white mb-3">컴퓨터공학과</p>
              <p className="text-gray-400 text-sm mb-1">학년</p>
              <p className="text-white">3학년</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-103 hover:border-pink-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-xl p-2 text-white">
                  <BookOpen />
                </div>
                <h2 className="text-white text-xl font-semibold">Interests</h2>
              </div>

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
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-103 hover:border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-br from-green-300 to-green-600 rounded-xl p-2 text-white">
                  <BookText />
                </div>
                <h2 className="text-white text-xl font-semibold">Learning</h2>
              </div>

              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-7 bg-blue-400 rounded-full" />
                  <span>React & TypeScript</span>
                </li>
                <li className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-7 bg-green-400 rounded-full" />
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-7 bg-orange-400 rounded-full" />
                  <span>Cloud Native</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-103 hover:border-orange-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-br from-orange-400 to-orange-600 rounded-xl p-2 text-white">
                  <Goal />
                </div>
                <h2 className="text-white text-xl font-semibold">Next Goals</h2>
              </div>

              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-7 bg-blue-400 rounded-full" />
                  <span>Next.js</span>
                </li>
                <li className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-7 bg-green-400 rounded-full" />
                  <span>Three.js</span>
                </li>
                <li className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-7 bg-orange-400 rounded-full" />
                  <span>Flutter</span>
                </li>
                <li className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-7 bg-pink-400 rounded-full" />
                  <span>Dokcer</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-103 hover:border-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-br from-blue-600 to-blue-400 rounded-xl p-2 text-white">
                  <Briefcase />
                </div>
                <h2 className="text-white text-xl font-semibold">
                  Career Goals
                </h2>
              </div>

              <ul className="space-y-3 text-white">
                <li className="flex flex-col transform transition-transform duration-300 hover:translate-x-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <span className="text-lg">풀스택 개발자</span>
                  </div>
                  <span className="ml-6 text-sm text-gray-400 break-keep">
                    프론트엔드와 백엔드를 모두 다룰줄 아는 개발자
                  </span>
                </li>
                <li className="flex flex-col transform transition-transform duration-300 hover:translate-x-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <span className="text-lg">Frontend Developer</span>
                  </div>
                  <span className="ml-6 text-sm text-gray-400 break-keep">
                    애니메이션 기능도 자유자재로 다루며 사용자 경험에 다양성을
                    줄 수 있는 프론트엔드 개발자
                  </span>
                </li>
                <li className="flex flex-col transform transition-transform duration-300 hover:translate-x-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <span className="text-lg">DevOps</span>
                  </div>
                  <span className="ml-6 text-sm text-gray-400 break-keep">
                    도커나 쿠버네티스와 같은 툴을 이용한 DevOps 기술을 갖춘
                    개발자
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
