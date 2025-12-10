import { motion, AnimatePresence } from "framer-motion";
import ProjectImage1 from "../../assets/project1.png";
import {
  ExternalLink,
  Calendar,
  Users,
  CircleCheckBig,
  Zap,
  Layers,
  Lightbulb,
  ChevronsLeftRight,
  CircleAlert,
  TrendingUp,
  Heart,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const Project3 = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="w-full max-w-6xl p-10 bg-linear-to-br from-blue-600 to-blue-400 border border-[#272727] rounded-3xl overflow-hidden">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl text-white font-medium">
            나만의 인사이트를 저장하는 북마크 플랫폼
          </h1>

          <ExternalLink
            className={clsx(
              "text-white duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </div>

        <p className="text-gray-300 text-xl mb-5">BookMark Platform</p>
        <div className="flex items-center gap-3">
          <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-200 gap-2">
            <Calendar size={18} />
            <span>2025.06 - 2025.08</span>
          </div>
          <div className=" bg-blue-200/30 px-4 py-2 rounded-full flex items-center text-gray-200 gap-2">
            <Users size={18} /> <span>10명 (프론트엔드 개발)</span>
          </div>
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
              <div className="flex gap-10">
                <img
                  src={ProjectImage1}
                  alt="북마크 플랫폼"
                  className="min-w-150 h-90 rounded-lg"
                />
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="text-purple-500" />
                    <h1 className="text-xl text-white">Key Features</h1>
                  </div>

                  <ul className="space-y-3">
                    <li className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 rounded-xl">
                      <CircleCheckBig size={20} className="text-green-400" />
                      <span className="text-gray-300">
                        웹과 모바일을 분리하여 UI/UX 적용
                      </span>
                    </li>
                    <li className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 rounded-xl">
                      <CircleCheckBig size={20} className="text-green-400" />
                      <span className="text-gray-300">
                        URL을 복사해오면 자동으로 썸네일과 제목 추출
                      </span>
                    </li>
                    <li className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 rounded-xl">
                      <CircleCheckBig size={20} className="text-green-400" />
                      <span className="text-gray-300">
                        저장한 인사이트를 손쉽게 검색
                      </span>
                    </li>
                    <li className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 rounded-xl">
                      <CircleCheckBig size={20} className="text-green-400" />
                      <span className="text-gray-300">
                        카테고리 & 태그별로 분류해 쉽게 관리
                      </span>
                    </li>
                    <li className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 rounded-xl">
                      <CircleCheckBig size={20} className="text-green-400" />
                      <span className="text-gray-300">
                        카카오톡 나에게 보내기 알림 설정을 통해 리마인드
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-10 mb-3">
                <Layers className="text-blue-500" />
                <h1 className="text-xl text-white">Tech Stack</h1>
              </div>
              <div className="flex gap-3">
                <div className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 py-3 rounded-2xl text-white hover:scale-105 transition">
                  React
                </div>
                <div className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 py-3 rounded-2xl text-white hover:scale-105 transition">
                  TypeScript
                </div>
                <div className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 py-3 rounded-2xl text-white hover:scale-105 transition">
                  Tanstack Query
                </div>
                <div className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 py-3 rounded-2xl text-white hover:scale-105 transition">
                  Jotai
                </div>
                <div className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 py-3 rounded-2xl text-white hover:scale-105 transition">
                  Framer Motion
                </div>
                <div className="bg-white/15 border border-white/10 flex items-center gap-3 p-4 py-3 rounded-2xl text-white hover:scale-105 transition">
                  Zod + React Hook Form
                </div>
              </div>

              <div className="flex items-center gap-2 mt-10 mb-5">
                <Lightbulb className="text-yellow-500" />
                <h1 className="text-xl text-white">Motivation</h1>
              </div>
              <p className="text-gray-300 break-keep leading-5">
                나중에 봐야겠다 생각하고 저장해두는 콘텐츠들이 막상 필요할 때
                어디에 저장했는지, 어떤 제목을 가지고 있는지도 모르는 상황이
                주변에서 여럿 발생했습니다. 그래서 저장하는 콘텐츠를 찾기 쉽게
                만들고, 사용자가 해당 내용을 온전히 자신의 것으로 만들 수 있도록
                돕고자 이 서비스를 기획하게 되었습니다.
              </p>

              <div className="flex items-center gap-2 mt-10 mb-5">
                <ChevronsLeftRight className="text-green-500" />
                <h1 className="text-xl text-white">Implementation</h1>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-300">
                    React와 TypeScript를 활용한 컴포넌트 기반 UI 설계
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-300">
                    Tanstack Query을 활용한 안정적인 비동기 데이터를 안정적으로
                    캐싱
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-300">
                    Joati를 활용한 atom 기반 전역 상태 관리
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-300">
                    Zod + React Hook Form을 활용한 Form 태그의 유효성 검사
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-300">
                    Framer Motion을 활용한 자연스러운 슬라이더 애니메이션 구현
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <CircleAlert className="text-orange-500" />
                  <h1 className="text-xl text-white">Troubleshooting</h1>
                </div>
                <div className="bg-orange-400/10 p-6 space-y-5 rounded-xl border border-orange-500/40">
                  <div className="flex gap-2">
                    <span className="text-orange-500">Problem:</span>
                    <span className="text-gray-300 break-keep leading-5">
                      북마크 생성에서 태그 추가 시 서버에 요청을 보내고 기다려야
                      해서 UI가 바로 생성되지 않음
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400">Solution:</span>
                    <span className="text-gray-300 break-keep leading-5">
                      Tanstack Query의 Optimistic Update(낙관적 업데이트) 기법을
                      활용해서 UI가 먼저 반영되도록 함
                    </span>
                  </div>
                </div>

                <div className="bg-orange-400/10 p-6 space-y-5 rounded-xl border border-orange-500/40">
                  <div className="flex gap-2">
                    <span className="text-orange-500">Problem:</span>
                    <span className="text-gray-300 break-keep leading-5">
                      링크에서 자동 추출된 썸네일을 가져올 때 일부 사이트에서는
                      못 가져오는 경우가 발생
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400">Solution:</span>
                    <span className="text-gray-300 break-keep leading-5">
                      서버에서 해당 썸네일 이미지를 받아 바로 S3에 업로드한 뒤
                      프론트에는 S3 URL을 반환하는 구조로 변경
                    </span>
                  </div>
                </div>

                <div className="flex items-stretch gap-5 mt-5">
                  <div className="flex-1 flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-blue-500" />
                      <h1 className="text-xl text-white">Results</h1>
                    </div>
                    <div className="bg-blue-400/10 p-6 space-y-5 rounded-xl border border-blue-500/40">
                      <p className="text-gray-300 break-keep leading-5">
                        모든 기능을 미완성 없이 잘 마무리 해서 시상식에서 대상을
                        수상했다
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                      <Heart className="text-rose-500" />
                      <h1 className="text-xl text-white">Reflection</h1>
                    </div>
                    <div className="bg-rose-400/10 p-6 space-y-5 rounded-xl border border-blue-500/40">
                      <p className="text-gray-300 break-keep leading-5">
                        첫 협업 프로젝트였는데 팀 협업의 중요성을 배웠습니다.
                        특히 코드 리뷰와 문서화의 필요성을 깊이 느꼈습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <TrendingUp className="text-purple-500" />
                  <h1 className="text-xl text-white">Future Improvements</h1>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-400/15 border border-purple-400/40 flex items-center gap-3 p-4 py-3 rounded-full text-white hover:scale-105 transition">
                    파비콘 추출 가능한 사이트 확장
                  </div>
                  <div className="bg-purple-400/15 border border-purple-400/40 flex items-center gap-3 p-4 py-3 rounded-full text-white hover:scale-105 transition">
                    모바일 앱 개발
                  </div>
                  <div className="bg-purple-400/15 border border-purple-400/40 flex items-center gap-3 p-4 py-3 rounded-full text-white hover:scale-105 transition">
                    접근성 개선
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project3;
