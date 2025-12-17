import ProjectImage1 from "../assets/project1.png";
import ProjectImage2 from "../assets/project2.png";
import ProjectImage3 from "../assets/project3.png";

export const projectItems = [
  {
    title: "나만의 인사이트를 저장하는 북마크 플랫폼",
    subTitle: "BookMark Platform",
    date: "2025.06 - 2025.08",
    people: "10명 (프론트엔드 개발)",
    image: ProjectImage1,
    keyFeatures: [
      "웹과 모바일을 분리하여 UI/UX 적용",
      "URL을 복사해오면 자동으로 썸네일과 제목 추출",
      "저장한 인사이트를 손쉽게 검색",
      "카테고리 & 태그별로 분류해 쉽게 관리",
      "카카오톡 나에게 보내기 알림 설정을 통해 리마인드",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Jotai",
      "Framer Motion",
      "Zod + React Hook Form",
    ],
    motivation:
      "나중에 봐야겠다 생각하고 저장해두는 콘텐츠들이 막상 필요할 때 어디에 저장했는지, 어떤 제목을 가지고 있는지도 모르는 상황이 주변에서 여럿 발생했습니다. 그래서 저장하는 콘텐츠를 찾기 쉽게 만들고, 사용자가 해당 내용을 온전히 자신의 것으로 만들 수 있도록 돕고자 이 서비스를 기획하게 되었습니다.",
    implementation: [
      "React와 TypeScript를 활용한 컴포넌트 기반 UI 설계",
      "Tanstack Query을 활용한 안정적인 비동기 데이터를 안정적으로 캐싱",
      "Joati를 활용한 atom 기반 전역 상태 관리",
      "Zod + React Hook Form을 활용한 Form 태그의 유효성 검사",
      "Framer Motion을 활용한 자연스러운 슬라이더 애니메이션 구현",
    ],
    troubleshooting: [
      {
        problem:
          "북마크 생성에서 태그 추가 시 서버에 요청을 보내고 기다려야 해서 UI가 바로 생성되지 않음",
        solution:
          "Tanstack Query의 Optimistic Update(낙관적 업데이트) 기법을 활용해서 UI가 먼저 반영되도록 함",
      },
      {
        problem:
          "링크에서 자동 추출된 썸네일을 가져올 때 일부 사이트에서는 못 가져오는 경우가 발생",
        solution:
          "서버에서 해당 썸네일 이미지를 받아 바로 S3에 업로드한 뒤 프론트에는 S3 URL을 반환하는 구조로 변경",
      },
    ],
    results:
      "모든 기능을 미완성 없이 잘 마무리 해서 시상식에서 대상을 수상했습니다.",
    reflection:
      "첫 협업 프로젝트였는데 팀 협업의 중요성을 배웠습니다. 특히 코드 리뷰와 문서화의 필요성을 깊이 느꼈습니다.",
    futureImprovements: [
      "파비콘 추출 가능한 사이트 확장",
      "모바일 웹 개발",
      "접근성 개선",
    ],
    bgColor: "from-blue-600 to-blue-400",
    gitHub: "https://github.com/Leets-Official/BOOKMARK-FE",
  },
  {
    title: "Docker 기반 북마크 플랫폼 풀스택 구축",
    subTitle: "From frontend to backend and infrastructure in a single project",
    date: "2025.10 - 2025.11",
    people: "1명 (풀스택 개발)",
    image: ProjectImage2,
    keyFeatures: [
      "도커를 활용해 프론트, 백, DB를 각각 컨테이너로 분리",
      "모든 컨테이너가 한 네트워크 안에서 통신하도록 구성",
      "풀스택으로 프론트엔드 + 백엔드를 모두 직접 프로그래밍",
      "기존 북마크 플랫폼의 주요 기능인 인사이트를 저장하는 기능 유지",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Docker"],
    motivation:
      "기존에 프론트만 담당했던 프로젝트를 기반으로, 클라이언트부터 서버, 인프라까지 전체 흐름을 이해하고 직접 구축해보는 경험을 해보고자 프로젝트를 시작하게 되었다.",
    implementation: [
      "React와 TypeScript 기반의 컴포넌트 구조를 재설계하여 확장성 강화",
      "Docker 배포 환경을 고려한 API 통신 구조 및 에러 핸들링 재설계",
      "Redis를 통한 세션 공유로 로그인 시 접근 가능",
      "환경변수 분리로 개발/테스트/배포 환경 동일한 코드베이스 유지",
      "Nginx Reverse Proxy 환경에 맞춰 클라이언트 라우팅 동작 보정",
    ],
    troubleshooting: [
      {
        problem:
          "Docker 환경에서 프론트 라우팅이 /새로운라우트 로 접근 시 404 반환",
        solution:
          "Nginx에서 SPA fallback 설정을 적용하여 클라이언트 라우팅 정상 동작하도록 수정",
      },
      {
        problem:
          "이미지 업로드 url 반환 시 요청은 잘 오지만 브라우저에 나오지 않는 문제 발생",
        solution: "주소를 https가 아닌 http로만 보내도록 수정",
      },
    ],
    results:
      "학교 수업을 클라우드 네이티브라는 과목을 들으면서 진행했던 과제인데 이해한 내용을 바탕으로 잘 마무리해서 좋은 성적을 받을 수 있었습니다.",
    reflection:
      "프론트 → 백엔드 → Docker 배포까지 전체 흐름을 혼자 구축하며 실제 서비스 구조에 대한 이해도가 크게 향상되었습니다.",
    futureImprovements: [
      "CI/CD 자동 배포 도입",
      "SSR 또는 SSG 성능 개선 연구",
      "모바일 웹 개발",
    ],
    bgColor: "from-purple-600 via-pink-400 to-pink-500",
    gitHub: "https://github.com/JeongCW0522/Cloud-Native-report",
  },
  {
    title: "AI 기반 면접 코칭 플랫폼",
    subTitle: "AI Coaching Platform",
    date: "2025.11 - 2025.12",
    people: "6명 (프론트엔드 개발)",
    image: ProjectImage3,
    keyFeatures: [
      "OpenAI 기반 답변 분석 결과를 시각적으로 표현한 UI 구성",
      "예상 질문, 피드백, 모범 답변 등 텍스트 답변을 제공",
      "내가 질문했던 히스토리와 다른 사람의 면접 후기를 참고 가능",
      "PC와 모바일 UI를 다르게 구성하여 디바이스 환경이 바뀌어도 편안한 UX 제공",
    ],
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Tanstack Query",
      "Jotai",
      "Zod + React Hook Form",
    ],
    motivation:
      "다양한 조사에 따르면 취업 준비생들은 면접 준비를 가장 어려운 단계로 인식하고 있으며, 이 과정에서 필요한 피드백과 코칭을 충분히 제공받지 못하고 있는 것으로 나타났다. 누구나 저렴하게, 제한 없이, 구조화된 면접 코칭을 받을 수 있는 AI 기반 솔루션을 제공하기 위해 이 서비스를 기획하게 되었다.",
    implementation: [
      "PC에서는 사이드바, 모바일에서는 하단 Nav바를 통해 디바이스 환경에 따른 UI 제공",
      "면접 코칭 진행 시 질문 선택 -> 답변 작성 -> 피드백 순서대로 진행",
      "Tailwind CSS로 통일된 디자인 시스템 및 효율적인 스타일링 구현",
      "응답 분석 결과를 시각적 카드 형태로 구성하여 가독성 향상",
      "전역 UI 상태는 Jotai로 관리하여 컴포넌트 결합도 낮춤",
    ],
    troubleshooting: [
      {
        problem:
          "AI 응답이 지연될 때 사용자에게 빈 화면이 보여 UX가 매우 떨어짐",
        solution: "응답 스트리밍 구조에 맞춘 단계형 스켈레톤 UI 도입",
      },
      {
        problem:
          "드롭다운 메뉴가 나올 때 화면 하단에서 나오면 잘리는 현상 발생",
        solution:
          "드롭다운 트리거가 브라우저 화면 기준 중앙보다 아래면 중앙으로 이동 후에 펼쳐지도록 수정",
      },
    ],
    results:
      "실제 사용자 테스트에서 ‘면접을 실제로 보는 느낌이 난다’는 긍정 피드백을 확보했습니다.",
    reflection:
      "AI 기반 기능은 단순한 기능 구현을 넘어 '사용자에게 어떻게 보여줄 것인가'가 매우 중요함을 깨달았습니다.",
    futureImprovements: [
      "음성 분석 기능 추가",
      "AI 답변에 대한 상세 피드백 유형 확장",
      "자기소개서 분석도 추가",
    ],
    bgColor: "from-green-500 to-green-600",
    gitHub: "https://github.com/JobMate-team/jobmate-frontend",
  },
];
